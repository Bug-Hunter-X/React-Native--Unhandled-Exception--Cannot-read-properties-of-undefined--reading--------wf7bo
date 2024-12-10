# React Native: Accessing State/Props Before Mount

This repository demonstrates a common error in React Native: attempting to access component state or props before the component has fully mounted. This often leads to `Cannot read properties of undefined (reading '...')` errors.

## Problem

The `bug.js` file shows the incorrect approach, where a component tries to use `props.data` within a `useEffect` hook without checking if it's defined.  Because the data might not be available immediately, this results in an error.

## Solution

The `bugSolution.js` file demonstrates the correct solution.  It uses a conditional statement within the `useEffect` to ensure `props.data` is defined before accessing its properties. The `useEffect` hook also includes `props.data` in the dependency array, ensuring it re-runs when the data changes.