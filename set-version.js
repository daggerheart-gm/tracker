#!/usr/bin/env node

// Script to set version information for the build
// This can be run as part of the build process to inject git commit info

const fs = require('fs');
const { execSync } = require('child_process');

try {
  // Get current git commit hash
  const gitHash = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
  
  // Create or update .env file with git hash
  const envContent = `REACT_APP_GIT_SHA=${gitHash}\n`;
  
  // Write to .env.local (which is gitignored and takes precedence)
  fs.writeFileSync('.env.local', envContent);
  
  console.log(`✅ Version info set: ${gitHash.substring(0, 7)}`);
  
} catch (error) {
  console.log('⚠️  Could not get git info, using default version');
  // Create empty .env.local so the app defaults to 'dev'
  fs.writeFileSync('.env.local', 'REACT_APP_GIT_SHA=dev\n');
}