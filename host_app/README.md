# mfe-base-host

ThIn this template, all libraries and plugins are installed, as well as all configurations necessary for building a micro-frontend application with all the features of a PWA. The `host` template comes with a component for accrediting the application in the BigBoxx middleware, to allow access to the sensory data collected by the e-Cattle platform.

## 👩🏿‍💻 Configurações

You will only need to change anything in the `host` application if you add a `remote` application. In that case, you will need to include `remote` in the `config.federation.js` file of the `host` application.

You must change the `config.federation.js` file in the `host` application. Just include the component name and the address of the `remoteEntry.js` that was exposed in the `remote`. Assuming the name is `ExposedRemoteComponent` and the path `https://localhost:5005/assets/remoteEntry.js`, the `config.federation.js` of the `host` would look like this:

```javascript
export default {
  name: "app",
  remotes: {
    // Exemplo de declaração de um remote na aplicação host
    ExposedRemoteComponent: "https://localhost:5005/assets/remoteEntry.js",
  },
  shared: ["vue", "vuetify", "axios", "core-js", "pinia", "vue-router"],
};
```

From there, the `remote` component(s) can be used on the `host`. Example of using the component named `ExposedRemoteComponent` being used on the `host`, both using the Vue.js framework:

```javascript
<template>
  <ExposedRemoteComponent v-if="!!ExposedRemoteComponent" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const ExposedRemoteComponent = defineAsyncComponent(
  () => import('remote_app/ExposedRemoteComponent')
)
</script>
```

## Licença 📃

This project is licensed under the [MIT](./../LICENSE) license.
