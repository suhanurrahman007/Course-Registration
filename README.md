# Course Registration Project 

## Q1. Add at least 3 Project features ?

### **_Ans : 1**_ 
**1. Dynamic Course Catalog:** Search, filter, and sort available courses.
Secure Payment Gateway : Multiple payment options with instant verification.

**2. Discounts & Coupons :** Apply dynamic discounts and coupon codes.

**3. Course Bundling :** Purchase curated or custom course bundles at discounted rates.


## Q2. Discuss how you managed the state in your assignment project ?


### **_Ans : 2**_ 
In the Course Registration Project, managing the application's state was of utmost importance due to the dynamic nature of course data, user registrations, payments, etc. Here's a breakdown of how I managed the state:

**1. Local Component State:**
For UI components where the state was ephemeral and not needed globally, I utilized React's local state using the useState hooks. For example:
 
 1. Form controls, such as input fields in the course registration form, had their state managed locally within the component.

 2. Modal visibility (like a course details modal) was also managed using component-level state since it was specific to individual UI components.

**2. Middleware & Side Effects:**
Redux Thunk was integrated to manage side effects.

 1. This allowed for asynchronous actions, like API calls to fetch course data or process payments, to be seamlessly integrated with synchronous state updates.

 2. Error states from API failures were captured and stored in Redux, allowing global error handling and user notifications.

**3. Testing State Management:**
 Incorporated unit tests for Redux reducers and actions using Jest to ensure the state updated correctly as per defined logic.

