#!/bin/bash
# ============================================================
# Hands-on Lab: Branching and Merging
# Objective: Create a branch, make changes, merge with master
# Run this from inside your local Git repository folder
# ============================================================

echo "===================================================="
echo "BRANCHING"
echo "===================================================="

echo "----------------------------------------------------"
echo "STEP B1: Create a new branch 'GitNewBranch'"
echo "----------------------------------------------------"
git branch GitNewBranch
echo ""

echo "----------------------------------------------------"
echo "STEP B2: List all local and remote branches"
echo "(Observe the '*' marking the current branch)"
echo "----------------------------------------------------"
git branch -a
echo ""

echo "----------------------------------------------------"
echo "STEP B3: Switch to GitNewBranch and add files with content"
echo "----------------------------------------------------"
git checkout GitNewBranch
echo "Confirming current branch:"
git branch
echo ""

echo "This is a new feature added in GitNewBranch" > feature.txt
echo "Second file for testing branch changes" > feature2.txt
echo "Created feature.txt and feature2.txt:"
ls -la feature*.txt
echo ""

echo "----------------------------------------------------"
echo "STEP B4: Commit the changes to the branch"
echo "----------------------------------------------------"
git add .
git commit -m "Added feature files in GitNewBranch"
echo ""

echo "----------------------------------------------------"
echo "STEP B5: Check git status"
echo "----------------------------------------------------"
git status
echo ""

echo "===================================================="
echo "MERGING"
echo "===================================================="

echo "----------------------------------------------------"
echo "STEP M1: Switch to master"
echo "----------------------------------------------------"
git checkout master
echo ""

echo "----------------------------------------------------"
echo "STEP M2: List command-line differences: master vs GitNewBranch"
echo "----------------------------------------------------"
git diff master GitNewBranch
echo ""

echo "----------------------------------------------------"
echo "STEP M3: Visual diff using P4Merge (opens external tool)"
echo "NOTE: This requires P4Merge to be configured as your difftool."
echo "If not yet configured, run these once (adjust path as needed):"
echo "  git config --global diff.tool p4merge"
echo '  git config --global difftool.p4merge.cmd "\"C:/Program Files/Perforce/p4merge.exe\" \"\$LOCAL\" \"\$REMOTE\""'
echo "----------------------------------------------------"
git difftool master GitNewBranch
echo ""

echo "----------------------------------------------------"
echo "STEP M4: Merge GitNewBranch into master"
echo "----------------------------------------------------"
git checkout master
git merge GitNewBranch
echo ""

echo "----------------------------------------------------"
echo "STEP M5: Observe the log graph after merging"
echo "----------------------------------------------------"
git log --oneline --graph --decorate
echo ""

echo "----------------------------------------------------"
echo "STEP M6: Delete the branch after merging, then check status"
echo "----------------------------------------------------"
git branch -d GitNewBranch
echo ""
echo "Branch list after deletion:"
git branch -a
echo ""
echo "Final git status:"
git status
echo ""

echo "===================================================="
echo "LAB COMPLETE"
echo "Verify above that:"
echo "  1. GitNewBranch was created and switched to successfully"
echo "  2. feature.txt and feature2.txt were committed on GitNewBranch"
echo "  3. The merge into master completed without conflicts"
echo "  4. git log --graph shows the branch and merge history"
echo "  5. GitNewBranch no longer appears in the branch list"
echo "===================================================="
