import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../imports/lib/router.js'
import '../imports/lib/helpers.js'

import '../imports/template/layout.html'
import '../imports/template/layout.js'

import '../imports/home/home.html'
import '../imports/home/home.js'

import '../imports/partials/partTamagotchi.html'
import '../imports/partials/partTamagotchi.js'
import '../imports/partials/partHistory.html'
import '../imports/partials/partHistory.js'
import '../imports/partials/partChat.html'
import '../imports/partials/partChat.js'

import '../imports/adopt/adopt.html'
import '../imports/adopt/adopt.js'

import '../imports/myTama/myTama.html'
import '../imports/myTama/myTama.js'
import '../imports/myTama/tamaGroupDetail.html'
import '../imports/myTama/tamaGroupDetail.js'

import '../imports/join/join.html'
import '../imports/join/join.js'

import '../imports/styles/style.css'
import '../imports/styles/nav.css'
import '../imports/styles/home.css'
import '../imports/styles/partTamagotchi.css'
import '../imports/styles/partHistory.css'
import '../imports/styles/myTama.css'
import '../imports/styles/adopt.css'
import '../imports/styles/join.css'
import '../imports/styles/groupDetail.css'
import '../imports/styles/partChat.css'

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});