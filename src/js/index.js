"use strict";

import "core-js";
import "regenerator-runtime/runtime";

import Vue from 'vue';
import Layout from './layout';

import Quasar, {QSelect}  from 'quasar';

export default class Select {

    constructor(selector) {

        const el = document.querySelector(selector);

        Vue.use(Quasar, {
            components: {
                QSelect,
            }
        });

        let vm = new Vue({
            el,
            render: h => h(Layout),
        });
    }
}



const paymentApp = new Select('#select-widget');
