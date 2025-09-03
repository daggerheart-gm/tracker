# Versioning

This project uses automated versioning based on build date and git commit hash.

## Version Format

Versions follow the format: `v{YYYY-MM-DD}-{git-hash}`

Example: `v2025-01-03-a1b2c3d`

## How It Works

1. **Build Date**: Uses the current date when the version is generated
2. **Git Commit**: Uses the current git commit hash (first 7 characters)
3. **Automatic Generation**: Version is set during the build process

## Scripts

- `npm run version` - Manually set version info
- `npm run build` - Automatically sets version then builds
- `npm run deploy` - Builds with version and deploys

## Environment Variables

The version system uses `REACT_APP_GIT_SHA` environment variable:
- Set automatically by `set-version.js` script
- Falls back to 'dev' if git is not available
- Stored in `.env.local` (gitignored)

## Development

During development, the version will show as `v{date}-dev` unless you run the version script manually.