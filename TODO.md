# Task: Add visual effect to color selection in Details page

## TODO:
- [x] Read and understand Details.js and ProductPage.css
- [x] Add state to track selected colors for each row (row1, row2, row3)
- [x] Update color click handlers to set selected color state
- [x] Add conditional styling for selected color dots

## Implementation Steps:
1. ✅ Add `selectedRowColors` state for row1, row2, row3
2. ✅ Update `handleColorClick`, `handleColorClick2`, `handleColorClick3` to set selected colors
3. ✅ Add conditional style to color dots in each row to show selection effect

## Changes Made:
- Added `selectedRowColors` state to track the selected color for each product card in each row
- Updated all three color click handlers to update the selected color state
- Added conditional inline styles to show visual selection effect:
  - Box shadow change (cyan glow effect)
  - Scale transformation (1.15x size)
  - Border (cyan border)
  - Smooth transition animation
