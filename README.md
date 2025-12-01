# exa-assessment

## Development server for angular-app

```bash
ng serve
```

## Development server for react-app

```bash
npm run start
```

## Architecture & Strategy Questions

### 1. How would you structure a frontend project with both React and Angular?
####  We would have to know complexity and scale of that project. Like in this assessment we could have separate projects in same repo that are completely separated and don't know about each other at all.
####  Other two options would be: Micro-frontends (simpler version) and Micro-frontends using webpack module federation (for complex runtime cases).

### 2. Approach to handling responsiveness in gaming UIs?
####  More dynamic and explosive design than regular "static" websites (like retail, social sites etc). Since users have in mind playing games and betting they expect fun and design that has more energy and responsivnes. So reusing animation as much as possible would be my answer.

### 3. How to optimize performance for animations and real-time updates?
#### In case of react that would be using React.memo and lazy loading as far as it makes sense. Having in mind limitations like CPU/GPU heavy CSS computing and using web workers for edge cases. Generally, following best practices, using requestAnimationFrame where it can be beneficial and monitor website speed and glitches.

### 4. How to handle localization (i18n) in both React and Angular?
#### First step would be finding matching libraries for both technologies that handles i18n the same, so we could have same set of keys reused for both.
#### Second step is to figure out if we want to store translation array (data) in separate package (fetched from our API/database) that can be reused or to use third-party solution.

### 5. How to version and deploy frontend games with backend updates?
#### By using CI/CD pipelines and smooth releases that uses rollback strategies. Coding standards and smart branch stragies are important as well. Also, using feature-flags with gradual releases (only some percentege of users get it until full release). Semantic versioning for both frontend and backend.