#!/bin/bash

# Sunny Day 365 Website + CMS Starter Script
# This script starts the Vite development server which serves both the public website and the CMS admin panel

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Sunny Day 365 Website + CMS${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: package.json not found!${NC}"
    echo "Please run this script from the sunnyday365-vite directory."
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    npm install
    echo -e "${GREEN}✅ Dependencies installed!${NC}"
    echo ""
fi

# Check if Vite is installed
if ! command -v npx &> /dev/null; then
    echo -e "${RED}Error: npx not found. Please install Node.js.${NC}"
    exit 1
fi

echo -e "${GREEN}🚀 Starting Sunny Day 365 Website + CMS...${NC}"
echo ""
echo -e "${YELLOW}Available URLs:${NC}"
echo -e "  ${GREEN}🌐 Public Website:${NC} http://localhost:5173"
echo -e "  ${GREEN}⚙️  CMS Admin:${NC}     http://localhost:5173/admin"
echo ""
echo -e "${YELLOW}Press Ctrl+C to stop the server${NC}"
echo ""

# Start the dev server
npm run dev
