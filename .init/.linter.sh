#!/bin/bash
cd /home/kavia/workspace/code-generation/storyswap-ai-107894-3e7eedee/app_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

