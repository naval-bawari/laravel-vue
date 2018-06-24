import Example from './components/ExampleComponent.vue';
import Home from './components/HomeComponent.vue';
import Contact from './components/ContactComponent.vue';

export const routes = [
    { 
    	path: '/', component: Example, name: 'Example',	
	    meta: {
	      progress: {
	        func: [
	          {call: 'color', modifier: 'temp', argument: '#ffb000'},
	          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
	          {call: 'location', modifier: 'temp', argument: 'top'},
	          {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 1400}}
	        ]
	      }
	    }
     },
    { 
	   	path: '/about-us', component: Home, name: 'Home',
	   	meta: {
	    progress: {
	        func: [
	          {call: 'color', modifier: 'temp', argument: '#ffb000'},
	          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
	          {call: 'location', modifier: 'temp', argument: 'top'},
	          {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 1400}}
	        ]
	      	}
    	} 
	},
    { 
    	path: '/contact-us', component: Contact, name: 'Contact',
    	meta: {
	    progress: {
	        func: [
	          {call: 'color', modifier: 'temp', argument: '#ffb000'},
	          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
	          {call: 'location', modifier: 'temp', argument: 'top'},
	          {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 1400}}
	        ]
	      }
    	} 
	},

];