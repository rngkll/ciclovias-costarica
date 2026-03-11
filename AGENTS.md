# Agent Instructions for Ciclovias Costa Rica

This document provides guidelines for AI coding agents working on the Ciclovias Costa Rica project - a platform to track and visualize bike lane infrastructure in Costa Rica.

## Project Overview

This project aims to check and display the current state of bike lanes across Costa Rica. The codebase is in early stages and will evolve to include mapping, data collection, and visualization features.

## Rules
- Every documentation is going to be in english
- Site should be translatable to english, spanish and french
- Main language of the site is going to be spanish
- Everything is open source

## Build, Test & Lint Commands

### Setup
```bash
# Installation (update once package.json exists)
npm install
# or
pip install -r requirements.txt
```

### Build Commands
```bash
# Build for production
npm run build
# or
python -m build
```

### Test Commands
```bash
# Run all tests
npm test
# or
pytest

# Run a single test file
npm test -- path/to/test.spec.ts
# or
pytest path/to/test_file.py

# Run tests with coverage
npm run test:coverage
# or
pytest --cov

# Run tests in watch mode
npm run test:watch
# or
pytest-watch
```

### Lint & Format
```bash
# Lint code
npm run lint
# or
flake8 .

# Fix linting issues automatically
npm run lint:fix
# or
black . && isort .

# Format code
npm run format
# or
prettier --write "**/*.{js,ts,tsx,json,md}"
```

### Development
```bash
# Start development server
npm run dev
# or
python manage.py runserver
```

## Code Style Guidelines

### General Principles
- Write clear, self-documenting code with meaningful variable and function names
- Prefer composition over inheritance
- Keep functions small and focused (single responsibility principle)
- Comment *why* not *what* - code should be self-explanatory
- Use early returns to reduce nesting
- Avoid magic numbers - use named constants

### File Organization
- Group related functionality together
- Keep files focused and under 300 lines when possible
- Place types/interfaces near their usage
- Use index files for clean exports from directories

### Naming Conventions
- **Files**: Use kebab-case for files: `bike-lane-service.ts`, `map-utils.py`
- **Classes**: Use PascalCase: `BikeLaneController`, `MapService`
- **Functions/Methods**: Use camelCase: `getBikeLanes()`, `calculateDistance()`
- **Constants**: Use SCREAMING_SNAKE_CASE: `MAX_ZOOM_LEVEL`, `API_BASE_URL`
- **Private members**: Prefix with underscore: `_internalMethod()`, `_cache`
- **Boolean variables**: Use is/has/should prefixes: `isActive`, `hasPermission`, `shouldUpdate`

### Imports
- Group imports in this order:
  1. External/third-party dependencies
  2. Internal/local modules
  3. Types and interfaces
  4. CSS/assets
- Use absolute imports when available (e.g., `@/components`, `src/utils`)
- Avoid wildcard imports (`import *`) - be explicit about what you import
- Remove unused imports before committing

Example:
```typescript
import React, { useState, useEffect } from 'react';
import { Map } from 'leaflet';

import { BikeLaneService } from '@/services/bike-lane-service';
import { calculateDistance } from '@/utils/geo-utils';

import type { BikeLane, Coordinates } from '@/types';

import styles from './map-view.module.css';
```

### Type Safety
- Always use TypeScript when applicable (avoid `any` type)
- Define interfaces for data structures and API responses
- Use type inference where obvious, explicit types for function signatures
- Leverage union types and discriminated unions for state management
- Add Python type hints to all function signatures

### Error Handling
- Always handle errors explicitly - don't let them fail silently
- Use try-catch blocks for operations that can fail
- Log errors with context (what operation failed, relevant IDs/data)
- Return error objects or use Result types instead of throwing when appropriate
- Validate user input and external data at boundaries
- Provide meaningful error messages for end users

Example:
```typescript
try {
  const bikeLanes = await bikeLaneService.fetchAll();
  return { success: true, data: bikeLanes };
} catch (error) {
  logger.error('Failed to fetch bike lanes', { error, userId });
  return { success: false, error: 'Unable to load bike lanes. Please try again.' };
}
```

### Comments & Documentation
- Add JSDoc/docstrings for public APIs and complex functions
- Document assumptions, edge cases, and "why" decisions
- Keep comments up to date when code changes
- Avoid obvious comments that just restate the code
- Use TODO comments with issue numbers: `// TODO(#123): Optimize query performance`

### Testing
- Write tests for all business logic and utilities
- Use descriptive test names that explain the scenario
- Follow AAA pattern: Arrange, Act, Assert
- Mock external dependencies and APIs
- Test edge cases and error conditions
- Aim for high coverage but focus on meaningful tests

## Geographic Data Considerations

Since this project deals with Costa Rican bike lanes:
- Use WGS84 (EPSG:4326) coordinate system for lat/lng
- Store coordinates as [longitude, latitude] per GeoJSON spec
- Handle coordinate precision appropriately (5-6 decimal places)
- Consider geographic queries and spatial indexing
- Validate coordinates are within Costa Rica bounds (approximately: lat 8-11°N, lng -86 to -82°W)

## Git Workflow

- Write clear, descriptive commit messages
- Use conventional commits format: `type(scope): description`
  - Types: feat, fix, docs, style, refactor, test, chore
- Keep commits focused and atomic
- Reference issue numbers in commits: `fix(map): correct zoom level (#42)`
- Always pull before pushing to avoid conflicts

## Questions & Decisions

When uncertain about implementation details:
- Check existing patterns in the codebase first
- Prioritize simplicity and readability
- Consider performance implications for map/geo operations
- Ask for clarification on user-facing features
- Document architectural decisions in code or ADRs

---

**Note**: This document will evolve as the project grows. Update it when patterns change or new conventions are established.
