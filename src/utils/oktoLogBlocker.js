/**
 * This utility specifically targets and blocks Okto SDK's internal logging
 * It works by patching the SDK's logging mechanism directly
 */

/**
 * Block Okto SDK logs by patching the window object
 * This is a more aggressive approach to ensure no sensitive data is logged
 */
export const blockOktoLogs = () => {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupBlocker);
  } else {
    setupBlocker();
  }
};

/**
 * Set up the Okto log blocker
 */
const setupBlocker = () => {
  // Block console logs from Okto SDK
  const originalConsoleLog = console.log;
  const originalConsoleInfo = console.info;
  const originalConsoleWarn = console.warn;
  const originalConsoleError = console.error;
  
  // Override console methods specifically for Okto SDK
  console.log = function(...args) {
    if (!isOktoLog(args)) {
      originalConsoleLog.apply(console, args);
    }
  };
  
  console.info = function(...args) {
    if (!isOktoLog(args)) {
      originalConsoleInfo.apply(console, args);
    }
  };
  
  console.warn = function(...args) {
    if (!isOktoLog(args)) {
      originalConsoleWarn.apply(console, args);
    }
  };
  
  console.error = function(...args) {
    if (!isOktoLog(args)) {
      originalConsoleError.apply(console, args);
    }
  };
  
  // Add a MutationObserver to block any Okto SDK script from adding its own console.log override
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        for (const node of mutation.addedNodes) {
          if (node.tagName === 'SCRIPT' && 
              (node.src.includes('okto') || node.textContent.includes('okto'))) {
            // Re-apply our console overrides after a short delay
            setTimeout(() => {
              console.log = function(...args) {
                if (!isOktoLog(args)) {
                  originalConsoleLog.apply(console, args);
                }
              };
            }, 100);
          }
        }
      }
    }
  });
  
  // Start observing
  observer.observe(document, { childList: true, subtree: true });
};

/**
 * Check if a log is from the Okto SDK
 * @param {Array} args - Console arguments
 * @returns {boolean} - True if log is from Okto SDK
 */
const isOktoLog = (args) => {
  try {
    // Convert to string for easier checking
    const logString = JSON.stringify(args).toLowerCase();
    
    // Check for Okto SDK specific patterns
    return (
      logString.includes('okto') ||
      logString.includes('bearer') ||
      logString.includes('authorization') ||
      logString.includes('token') ||
      logString.includes('request') && logString.includes('response') ||
      logString.includes('curl') ||
      logString.includes('userswa') ||
      logString.includes('userid')
    );
  } catch (e) {
    // If we can't stringify, check each argument individually
    for (const arg of args) {
      if (typeof arg === 'string' && 
          (arg.includes('okto') || 
           arg.includes('bearer') || 
           arg.includes('token'))) {
        return true;
      }
      
      if (arg && typeof arg === 'object') {
        try {
          const str = JSON.stringify(arg);
          if (str.includes('okto') || 
              str.includes('bearer') || 
              str.includes('token')) {
            return true;
          }
        } catch (e) {
          // Ignore
        }
      }
    }
    
    // Check the stack trace
    const stack = new Error().stack || '';
    return stack.includes('okto');
  }
};
