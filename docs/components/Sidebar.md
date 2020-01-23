# Sidebar

The component &lt;easca-sidebar&gt; is a wrapper that positions branding, navigation, and other elements into a concise sidebar.

## Example

<Demo componentName="examples-sidebar-doc" />

## Source Code

<SourceCode>
<<< @/src/components/Sidebar/Sidebar.vue
</SourceCode>

## Slots

### title

```javascript
<template v-slot:title>...</template>
```

### navigation

```javascript
<template v-slot:navigation>...</template>
```

For navigation links use &lt;b-nav-item&gt;.

```javascript
<b-nav-item active>Dashboard</b-nav-item>
```

For dropdowns use a combination of &lt;b-button&gt; and &lt;b-collapse&gt;.

```javascript
<b-button v-b-toggle="'account'">Account</b-button>
<b-collapse id='account' class='dropdown'>
  <b-nav-item>Profile</b-nav-item>
  <b-nav-item>Billing</b-nav-item>
  <b-nav-item>Security</b-nav-item>
</b-collapse>
```
