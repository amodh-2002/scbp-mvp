/**
 * Utility to suppress excessive logging in production
 * This helps prevent sensitive information from being logged to the console
 */

// Store original console methods
const originalConsole = {
  log: console.log,
  warn: console.warn,
  error: console.error,
  info: console.info,
  debug: console.debug
};

/**
 * Suppress detailed logs in all environments
 * This is especially important for sensitive information
 */
export const setupLogSuppression = () => {
  // Apply in all environments to ensure no sensitive data is logged
  // We'll still allow some development logs, but filter out sensitive info
  {
    // Override console methods to filter sensitive information
    console.log = (...args) => {
      // Filter out sensitive logs
      if (shouldSuppressLog(args)) {
        return;
      }
      originalConsole.log(...args);
    };

    console.info = (...args) => {
      if (shouldSuppressLog(args)) {
        return;
      }
      originalConsole.info(...args);
    };

    console.debug = (...args) => {
      // Completely suppress debug logs in production
      return;
    };

    // Keep error and warn intact for critical issues
    // But still filter sensitive data
    console.warn = (...args) => {
      if (shouldSuppressLog(args, true)) {
        return;
      }
      originalConsole.warn(...args);
    };

    console.error = (...args) => {
      if (shouldSuppressLog(args, true)) {
        return;
      }
      originalConsole.error(...args);
    };
  }
};

/**
 * Determine if a log should be suppressed based on content
 * @param {Array} args - Console arguments
 * @param {boolean} isErrorOrWarn - Whether this is an error/warn log
 * @returns {boolean} - True if log should be suppressed
 */
const shouldSuppressLog = (args, isErrorOrWarn = false) => {
  // Convert args to string for pattern matching
  let logString;
  try {
    logString = JSON.stringify(args).toLowerCase();
  } catch (e) {
    // If we can't stringify, convert to string
    logString = String(args).toLowerCase();
  }
  
  // Direct blocking of Okto SDK logs by checking the stack trace
  const stack = new Error().stack || '';
  if (stack.includes('@okto_web3') || stack.includes('okto-gateway')) {
    return true;
  }
  
  // Specifically target Okto SDK logs by content
  if (logString.includes('@okto_web3') || 
      logString.includes('okto-gateway') || 
      logString.includes('okto') || 
      (logString.includes('request') && logString.includes('response')) || 
      logString.includes('bearer') || 
      logString.includes('authorization') ||
      logString.includes('curl')) {
    return true;
  }
  
  // List of sensitive keywords to suppress
  const sensitivePatterns = [
    'authorization',
    'bearer',
    'token',
    'key',
    'secret',
    'password',
    'credential',
    'private',
    'wallet',
    'address',
    'userkeys',
    'getuserkeys',
    'userswa',
    'userid',
    'okto',
    'curl'
  ];

  // For errors and warnings, only suppress if they contain very sensitive info
  const criticalSensitivePatterns = [
    'bearer',
    'token',
    'private',
    'secret',
    'password'
  ];

  const patternsToCheck = isErrorOrWarn ? criticalSensitivePatterns : sensitivePatterns;
  
  // Check if log contains any sensitive patterns
  return patternsToCheck.some(pattern => logString.includes(pattern));
};

// Export a method to restore original console behavior (useful for testing)
export const restoreConsole = () => {
  console.log = originalConsole.log;
  console.warn = originalConsole.warn;
  console.error = originalConsole.error;
  console.info = originalConsole.info;
  console.debug = originalConsole.debug;
};
