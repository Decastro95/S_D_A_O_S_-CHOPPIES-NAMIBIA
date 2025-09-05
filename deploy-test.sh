#!/bin/bash
set -e

# -------------------------------
# Fix branch sync + test push
# -------------------------------

# 1. Ensure we’re on main
git checkout main || git checkout -b main

# 2. Pull latest changes from remote with rebase
git pull origin main --rebase

# 3. Create a tiny test commit (touch a CI marker file)
echo "Deployed at $(date)" > CI_TEST.md
git add CI_TEST.md
git commit -m "chore: CI/CD test commit"

# 4. Push to main (this triggers GitHub Actions → Vercel)
git push origin main

echo "✅ Test commit pushed! Check your GitHub Actions tab for the workflow run."
echo "➡️  Once complete, Vercel will auto-deploy your project."
