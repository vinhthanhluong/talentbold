export default function CountUpModule() {
    if ($('#countup')) {
        $('.counter').each(function () {
            var $this = $(this);
            var countTo = $this.attr('data-count');
            // var countTo = $this.attr('data-count').replace(/,/g, ''); dauphay

            $({ countNum: $this.text() }).animate({
                countNum: countTo
            },

                {
                    duration: 2000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum); 
                        
                        // $this.text(numberCountUp(this.countNum)); //dauphay
                        //alert('finished');
                    }

                });
        });

        // dau phay
        // function numberCountUp(x) {
        //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // }
    }
}