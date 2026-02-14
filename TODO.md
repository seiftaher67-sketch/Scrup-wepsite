# TODO List - TrackOrder Page Updates

## Task
Remove special styling effects from the first step ("تم تقديم الطلب" - Order Submitted) in the order tracking timeline to make it look like the rest of the elements.

## Plan
- [ ] Edit src/pages/profile/TrackOrder.js
  - [ ] Remove special `isFirstStep` conditional styling from the timeline container
  - [ ] Remove special styling from the icon (remove scale-110 and boxShadow)
  - [ ] Remove special styling from the title (remove blue color and extra font-bold)
  - [ ] Remove special styling from the date (remove blue color and extra font-bold)

## Changes Details
In the timeline section of TrackOrder.js, modify the mapping of `order.steps` to:
1. Remove the `isFirstStep` conditional class from the container div
2. Remove the `isFirstStep` conditional classes from the icon div (scale-110 and boxShadow)
3. Remove the `isFirstStep` conditional classes from the title div (text-blue-700 font-bold)
4. Remove the `isFirstStep` conditional classes from the date div (text-blue-600 font-semibold text-sm)

This will make all steps in the timeline have consistent styling.
