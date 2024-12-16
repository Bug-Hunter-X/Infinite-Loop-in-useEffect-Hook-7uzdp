# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook. The bug causes an infinite loop, resulting in the application crashing or becoming unresponsive.

## Bug Description

The `useEffect` hook in `bug.js` is missing a crucial dependency in its dependency array. This omission causes the effect to run on every render, leading to a continuous update of the state variable `count`, creating an infinite loop.

## Solution

The solution in `bugSolution.js` demonstrates how to properly include the dependency in the dependency array. By adding `count` to the array, the effect runs only when `count` changes. 
