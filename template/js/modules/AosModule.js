export default function AosModule() {
    AOS.init({
		startEvent: 'DOMContentLoaded',
		offset: 0,
		duration: 600,
		delay: '0',
		easing: 'ease',
		once: true,
		mirror: true,
		disable: function(){
            return $(window).width() < 768;
        },
	});

	
}