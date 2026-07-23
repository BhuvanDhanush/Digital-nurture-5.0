#!/bin/bash
# ============================================================
# Hands-on Lab: Git Ignore
# Objective: Ignore unwanted files/folders (.log files and log folder)
# ============================================================

echo "===================================================="
echo "STEP 1: Checking current git status (before changes)"
echo "===================================================="
git status
echo ""

echo "===================================================="
echo "STEP 2: Creating a .log file in the working directory"
echo "===================================================="
echo "This is a sample log entry" > application.log
ls -la *.log
echo ""

echo "===================================================="
echo "STEP 3: Creating a 'log' folder with a file inside"
echo "===================================================="
mkdir -p log
echo "Sample log inside folder" > log/debug.log
ls -la log/
echo ""

echo "===================================================="
echo "STEP 4: Checking git status BEFORE updating .gitignore"
echo "(application.log and log/ should show as untracked)"
echo "===================================================="
git status
echo ""

echo "===================================================="
echo "STEP 5: Creating/Updating .gitignore file"
echo "===================================================="
# Append ignore rules only if not already present, to avoid duplicates
touch .gitignore

if ! grep -qxF '*.log' .gitignore; then
    echo '*.log' >> .gitignore
fi

if ! grep -qxF 'log/' .gitignore; then
    echo 'log/' >> .gitignore
fi

echo "Contents of .gitignore:"
cat .gitignore
echo ""

echo "===================================================="
echo "STEP 6: Checking git status AFTER updating .gitignore"
echo "(application.log and log/ should now be ignored)"
echo "===================================================="
git status
echo ""

echo "===================================================="
echo "STEP 7: Staging and committing .gitignore itself"
echo "===================================================="
git add .gitignore
git commit -m "Add .gitignore to ignore .log files and log folder"
echo ""

echo "===================================================="
echo "STEP 8: Final verification - git status after commit"
echo "===================================================="
git status
echo ""

echo "===================================================="
echo "LAB COMPLETE"
echo "Verify above that:"
echo "  1. application.log is NOT listed as untracked"
echo "  2. log/ folder is NOT listed as untracked"
echo "  3. .gitignore was committed successfully"
echo "===================================================="
