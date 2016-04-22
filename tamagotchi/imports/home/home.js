import { TamaGez } from '../lib/collections.js';

Template.home.helpers({
	TamaGez () {
		return TamaGez.findOne({})
	}
})