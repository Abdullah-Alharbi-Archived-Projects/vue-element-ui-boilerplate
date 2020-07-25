# vue-element-ui-boilerplate

### Packed With:
- Vue-Router
- Vuex
- Element UI
- Node-Scss 


### define a new layout
1. create file at `src/layouts`
2. go to `src/router/index.js`
3. add the following to any route to use the newly created layout:
```
meta: {
    layout: 'my-layout'
}
```

##### example:
```
{
    path: "/",
    name: "Home",
    meta: {
      layout: "with-sidebar"
    },
    component: Home
},
```
> Note: if you didn't specify the layout the `src/layouts/default.vue` will be used instead

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
