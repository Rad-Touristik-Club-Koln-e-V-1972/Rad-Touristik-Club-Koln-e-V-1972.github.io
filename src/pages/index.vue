<template>
    <v-row id="index" align="center" justify="center">
        <v-col>
            <v-card>
                <v-card-title class="text-h5">Welcome to the Vuetify + Nuxt.js template</v-card-title>
                <v-card-text>
                    <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
                    <p>
                        For more information on Vuetify, check out the
                        <a href="https://vuetifyjs.com" rel="noopener noreferrer" target="_blank">documentation</a>.
                    </p>
                    <p>
                        If you have questions, please join the official
                        <a href="https://chat.vuetifyjs.com/" rel="noopener noreferrer" target="_blank" title="chat">discord</a>.
                    </p>
                    <p>
                        Find a bug? Report it on the github
                        <a href="https://github.com/vuetifyjs/vuetify/issues" rel="noopener noreferrer" target="_blank" title="contribute">issue board</a>.
                    </p>
                    <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
                    <div class="text-right">
                        <em><small>&mdash; John Leider</small></em>
                    </div>
                    <hr class="my-3" />
                    <a href="https://nuxtjs.org/" rel="noopener noreferrer" target="_blank">Nuxt Documentation</a>
                    <br />
                    <a href="https://github.com/nuxt/nuxt.js" rel="noopener noreferrer" target="_blank">Nuxt GitHub</a>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn nuxt :to="{ name: 'index' }">Continue</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped />
