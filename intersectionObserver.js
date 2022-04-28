const intObs = (value) => {
    //console.log("wsh t'es dans intObs ");

    if (value.totalResults > 10) {

        pageMax = Math.round((value.totalResults / 10)); // = nombre de page max
        //console.log(pageMax)
    }

    let observer = new IntersectionObserver(observables => {
        observables.forEach(observable => {

            if (observable.intersectionRatio > 0.9) {
                observable.target.classList.remove('not-visible');
                observable.target.classList.remove('not-visible');

                //console.log(observable.target.classList)
            };
            if (observable.target.classList.value === 'salut') {
                console.log(p);
                console.log(pageMax);
                observable.target.remove();
                page = (pageMax - pageMax) + p;
                newPage(page, p);
                //jspwsh(ends);
                //displayOtherPages(p, pageMax)
                //displayOtherPages
            };

        });
    }, {
        threshold: [0.9]
    });

    let items = document.querySelectorAll(".col-sm-4");
    const ends = document.querySelectorAll("#endPage")
        // console.log("sdvcsdvs")
        // console.log(ends[0].classList)

    items.forEach(function(item) {
        item.classList.add('not-visible')
        observer.observe(item)
    });
    ends.forEach(function(end) {
        end.classList.add('not-visible')
        observer.observe(end)
    });

}

const intObs2 = (p) => {
    console.log("wsh t'es dans intObs 22222");

    let observer = new IntersectionObserver(observables => {
        observables.forEach(observable => {

            if (observable.intersectionRatio > 0.9) {
                observable.target.classList.remove('not-visible');
                observable.target.classList.remove('not-visible');

                //console.log(observable.target.classList)
            };
            if (observable.target.classList.value === 'salut') {
                console.log(p);
                console.log(pageMax);
                observable.target.remove();
                page = (pageMax - pageMax) + p;
                newPage(page, p);
                //jspwsh(ends);
                //displayOtherPages(p, pageMax)
                //displayOtherPages
            };

        });
    }, {
        threshold: [0.9]
    });

    let items = document.querySelectorAll(".col-sm-4");
    const ends = document.querySelectorAll("#endPage")
        // console.log("sdvcsdvs")
        // console.log(ends[0].classList)

    items.forEach(function(item) {
        item.classList.add('not-visible')
        observer.observe(item)
    });
    ends.forEach(function(end) {
        end.classList.add('not-visible')
        observer.observe(end)
    });

}