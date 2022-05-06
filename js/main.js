/* fixed menu for mobile */
var headerHeight = $('#header').outerHeight(true);
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= headerHeight + 24) {
        $(".item").addClass("sticky-menu");
        $(".main").addClass("sticky-menu");
    }else{
        $(".item").removeClass("sticky-menu");
        $(".main").removeClass("sticky-menu");
    }
}); 
/* End of fixed menu for mobile */

/* mobile tabs popup */
var tabsMobile = $(".drop-down li");
var overlayCont = document.querySelector(".overlay-container");
var overlayInner = document.querySelector(".overlay-inner");
var wClose = document.getElementById("wClose");
var item = $('.item');
var itemName = $('.item span');

item.click(function() {
    overlayCont.classList.add("show");
    $('body').css('overflow-y', 'hidden');
})

tabsMobile.click(function() {
    overlayCont.classList.remove("show");
    $('.item span').text(this.innerText)
    $('body').css('overflow-y', 'scroll');
});

wClose.addEventListener("click", function() {
    overlayCont.classList.remove("show");
    $('body').css('overflow-y', 'scroll');
})

overlayCont.addEventListener("click", function(e) {
    if (e.target == overlayCont) {
        overlayCont.classList.remove("show");
        $('body').css('overflow-y', 'scroll');
    }
})
/* End of mobile tabs popup */

/* scroll to tob when click on mobile and desktop tabs */
$(".tabs li").click(function() {
    $([document.documentElement, document.body]).animate({
        // scrollTop: $(".main").offset().top
        scrollTop: 0
    }, 500);
});
/* End of scroll to tob when click on mobile and desktop tabs */



///////////////////////////////// Overview Tab /////////////////////////////////////////////////



//////////////////////////////// End of Overview Tab /////////////////////////////////////////////


////////////////////////////// Profile Tab //////////////////////////////////////////////////////
/* stock-information tabs */
let stockInformationTabs = document.querySelectorAll(".stock-information-tabs li");
let stockInformationTabsArray = Array.from(stockInformationTabs);
let stockInformationDivs = document.querySelectorAll(".stock-information__container > div");
let stockInformationDivsArray = Array.from(stockInformationDivs);
stockInformationTabsArray.forEach((ele) => {
    ele.addEventListener("click", function(e) {
        stockInformationTabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        stockInformationDivsArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    });
});
/* end of stock-information tabs */


/* Financials Highlights riyal scroll */
(function() {
    var scrollHandle = 0,
        scrollStep = 2,
        financialsHighlightsRiyalParent = $('.Financials-Highlights__riyal__container');
    //Start the scrolling process
    $(".Financials-Highlights__riyal__panner").on("mouseenter touchstart", function() {
        var data = $(this).data('scrollModifier'),
            direction = parseInt(data, 10);
        $(this).addClass('active-scroll');
        startScrolling(direction, scrollStep);
    });
    //Kill the scrolling
    $(".Financials-Highlights__riyal__panner").on("mouseleave", function() {
        stopScrolling();
        $(this).removeClass('active-scroll');
    });
    $(".Financials-Highlights__riyal__container").on("touchstart click mouseenter", function() {
        stopScrolling();
        $(".Financials-Highlights__riyal__panner").removeClass('active-scroll');
    });
    //Actual handling of the scrolling
    function startScrolling(modifier, step) {
        if (scrollHandle === 0) {
            scrollHandle = setInterval(function() {
                var newOffset = financialsHighlightsRiyalParent.scrollLeft() + (scrollStep * modifier);
                financialsHighlightsRiyalParent.scrollLeft(newOffset);
            }, 10);
        }
    }

    function stopScrolling() {
        clearInterval(scrollHandle);
        scrollHandle = 0;
    }
}());
/* end of Financials Highlights riyal scroll */

/* Financials-Highlights chart popup */

$(".Financials-Highlights__table__row__data__text__icon").click(function() {
    $('body').addClass('hide-scroll');
    $('.Financials-Highlights__popup').show();
})
$('.Financials-Highlights__popup__overlay__chart__close svg').click(function() {
    $('body').removeClass('hide-scroll');
    $('.Financials-Highlights__popup').hide();

})
var fH_Popup = document.querySelector('.Financials-Highlights__popup__overlay')
fH_Popup.addEventListener("click", function(e) {
    if (e.target == fH_Popup) {
        $('.Financials-Highlights__popup').hide();
        $('body').removeClass('hide-scroll');
    }
})
/* End of Financials-Highlights chart popup */


/* Financial Highlights tabs currency */

// English Currency //
$('.Financials-Highlights-tabs__usd-en').click(function() {
    $('.Financials-Highlights__currency__type-en').text('(USD)')
})
$('.Financials-Highlights-tabs__riyal-en').click(function() {
    $('.Financials-Highlights__currency__type-en').text('(Riyal)')
})

// Arabic Currency //
$('.Financials-Highlights-tabs__usd-ar').click(function() {
    $('.Financials-Highlights__currency__type-ar').text('(دولار)')
})
$('.Financials-Highlights-tabs__riyal-ar').click(function() {
    $('.Financials-Highlights__currency__type-ar').text('(ريال)')
})

/*  end of Financial Highlights tabs currency */

//////////////////////////////////// End Of Profile Tab ///////////////////////////////////////////////



///////////////////////////////// chart Tab //////////////////////////////////////////////
/* main-chart select dropdown */
const select = document.querySelectorAll('.main-chart__options__select__btn.ind');
const option = document.querySelectorAll('.main-chart__options__select__dropdown__option.ind');
let index = 1;

select.forEach(a => {
    a.addEventListener('click', b => {
        const next = b.target.nextElementSibling;
        next.classList.toggle('toggle');
        next.style.zIndex = index++;
    })
});

option.forEach(a => {
    a.addEventListener('click', b => {
        b.target.parentElement.classList.remove('toggle');

        const parent = b.target.closest('.main-chart__options__select').children[0];
        parent.setAttribute('data-type', b.target.getAttribute('data-type'));
        parent.innerText = b.target.innerText;
    })
});
/* end of main-chart select dropdown */
/* add class active to main-chart select dropdown to be bold */
$('.main-chart__options__select__dropdown__option.ind').click(function () {
    $('.main-chart__options__select__dropdown__option.ind').removeClass('active');
  $(this).addClass('active');
});
///* end of add class active to main-chart select dropdown to be bold */

/* main-chart select dropdown */
const selectType = document.querySelectorAll('.main-chart__options__select__btn.typ');
const optionType = document.querySelectorAll('.main-chart__options__select__dropdown__option.typ');
let indexType = 1;

selectType.forEach(a => {
    a.addEventListener('click', b => {
        const next = b.target.nextElementSibling;
        next.classList.toggle('toggle');
        next.style.zIndex = indexType++;
    })
});

optionType.forEach(a => {
    a.addEventListener('click', b => {
        b.target.parentElement.classList.remove('toggle');

        const parent = b.target.closest('.main-chart__options__select').children[0];
        parent.setAttribute('data-type', b.target.getAttribute('data-type'));
        parent.innerText = b.target.innerText;
    })
});
/* end of main-chart select dropdown */
/* add class active to main-chart select dropdown to be bold */
$('.main-chart__options__select__dropdown__option.typ').click(function () {
    $('.main-chart__options__select__dropdown__option.typ').removeClass('active');
    $(this).addClass('active');
});
///* end of add class active to main-chart select dropdown to be bold */


///* main-chart tabs */
//  $('.main-chart__periods li').click(function(){
//      $('.main-chart__periods li').removeClass('active');
//      $(this).addClass('active');
//  })
/* end of main-chart tabs */


/* data picker */
//$(function() {
//  $('input.calendar').pignoseCalendar({
//    format: 'YYYY-MM-DD',
//    theme: 'dark',
//  });
//  });
//  moment().format('YYYY-MM-DD');
/* end of data picker */



/* chartFinancialsHighlights scroll */
(function() {
    var scrollHandle = 0,
        scrollStep = 2,
        chartFinancialsHighlightsParent = $('.chart-financials-highlights__data__container');
    //Start the scrolling process
    $(".chart-financials-highlights__data__panner").on("mouseenter touchstart", function() {
        var data = $(this).data('scrollModifier'),
            direction = parseInt(data, 10);
        $(this).addClass('active-scroll');
        startScrolling(direction, scrollStep);
    });
    //Kill the scrolling
    $(".chart-financials-highlights__data__panner").on("mouseleave", function() {
        stopScrolling();
        $(this).removeClass('active-scroll');
    });
    $(".chart-financials-highlights__data__container").on("touchstart click mouseenter", function() {
        stopScrolling();
        $(".chart-financials-highlights__data__panner").removeClass('active-scroll');
    });
    //Actual handling of the scrolling
    function startScrolling(modifier, step) {
        if (scrollHandle === 0) {
            scrollHandle = setInterval(function() {
                var newOffset = chartFinancialsHighlightsParent.scrollLeft() + (scrollStep * modifier);

                chartFinancialsHighlightsParent.scrollLeft(newOffset);
            }, 10);
        }
    }

    function stopScrolling() {
        clearInterval(scrollHandle);
        scrollHandle = 0;
    }
}());
/* end of chartFinancialsHighlights scroll */

///////////////////////////////// End Of Chart Tab //////////////////////////////////////////////////////



///////////////////////////////////// Financial Statemenets Tab ///////////////////////////////

/* fS chart popup */
$(".fs-chart-btn").click(function() {
    $('body').addClass('hide-scroll');
    $('.fs-popup').show();
});
$('.fs-popup__overlay__chart__close svg').click(function() {
    $('body').removeClass('hide-scroll');
    $('.fs-popup').hide();

});
var fs_Popup = document.querySelector('.fs-popup__overlay')
fs_Popup.addEventListener("click", function(e) {
    if (e.target == fs_Popup) {
        $('.fs-popup').hide();
        $('body').removeClass('hide-scroll');
    }
});
/* End of fS chart popup */

/* Main Financial statement tabs currency */

$('.main-financial-statement__title__options__tabs li').click(function() {
    $('.main-financial-statement__title__options__tabs li').removeClass('active');
    $(this).addClass('active');
});


// English Currency //
$('.main-financial-statement__title__options__tabs__usd-en').click(function() {
    $('.st-currency-en').text('USD')
})
$('.main-financial-statement__title__options__tabs__riyal-en').click(function() {
    $('.st-currency-en').text('Riyal')
})

// Arabic Currency //
$('.main-financial-statement__title__options__tabs__usd-ar').click(function() {
    $('.st-currency-ar').text('دولار')
})
$('.main-financial-statement__title__options__tabs__riyal-ar').click(function() {
    $('.st-currency-ar').text('ريال')
})

/*  end of Main Financial statement tabs currency */


/* Main Financial statement tabs */
let mainFinancialstatementTabs = document.querySelectorAll(".main-financial-statement__tabs li");
let mainFinancialstatementTabsArray = Array.from(mainFinancialstatementTabs);
let mainFinancialstatementDivs = document.querySelectorAll("#financialStatementMain > div");
let mainFinancialstatementDivsArray = Array.from(mainFinancialstatementDivs);
//mainFinancialstatementTabsArray.forEach((ele) => {
//ele.addEventListener("click", function(e) {
//  mainFinancialstatementTabsArray.forEach((ele) => {
//      ele.classList.remove("active");
//  });
//  e.currentTarget.classList.add("active");
//  mainFinancialstatementDivsArray.forEach((div) => {
//      div.style.display = "none";
//  });
//  document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
//});
//});
/* End Of Main Financial statement tabs */

/* fs-annual-scroll scroll */
(function() {
    var scrollHandle = 0,
        scrollStep = 2,
        fs_annual_Parent = $('.fs-annual .scroll-container');
    //Start the scrolling process
    $(".fs-annual-panner").on("mouseenter touchstart", function() {
        var data = $(this).data('scrollModifier'),
            direction = parseInt(data, 10);
        $(this).addClass('active-scroll');
        startScrolling(direction, scrollStep);
    });
    //Kill the scrolling
    $(".fs-annual-panner").on("mouseleave", function() {
        stopScrolling();
        $(this).removeClass('active-scroll');
    });
    $(".fs-annual .scroll-container").on("touchstart click mouseenter", function() {
        stopScrolling();
        $(".fs-annual-panner").removeClass('active-scroll');
    });
    //Actual handling of the scrolling
    function startScrolling(modifier, step) {
        if (scrollHandle === 0) {
            scrollHandle = setInterval(function() {
                var newOffset = fs_annual_Parent.scrollLeft() + (scrollStep * modifier);

                fs_annual_Parent.scrollLeft(newOffset);
            }, 10);
        }
    }

    function stopScrolling() {
        clearInterval(scrollHandle);
        scrollHandle = 0;
    }
}());
/* end of fs-annual-scroll scroll */

/* fs-quarter-scroll scroll */
(function() {
    var scrollHandle = 0,
        scrollStep = 2,
        fs_quarter_Parent = $('.fs-quarter .scroll-container');
    //Start the scrolling process
    $(".fs-quarter-panner").on("mouseenter touchstart", function() {
        var data = $(this).data('scrollModifier'),
            direction = parseInt(data, 10);
        $(this).addClass('active-scroll');
        startScrolling(direction, scrollStep);
    });
    //Kill the scrolling
    $(".fs-quarter-panner").on("mouseleave", function() {
        stopScrolling();
        $(this).removeClass('active-scroll');
    });
    $(".fs-quarter .scroll-container").on("touchstart click mouseenter", function() {
        stopScrolling();
        $(".fs-quarter-panner").removeClass('active-scroll');
    });
    //Actual handling of the scrolling
    function startScrolling(modifier, step) {
        if (scrollHandle === 0) {
            scrollHandle = setInterval(function() {
                var newOffset = fs_quarter_Parent.scrollLeft() + (scrollStep * modifier);

                fs_quarter_Parent.scrollLeft(newOffset);
            }, 10);
        }
    }

    function stopScrolling() {
        clearInterval(scrollHandle);
        scrollHandle = 0;
    }
}());
/* end of fs-quarter-scroll scroll */

/* fs-interim-scroll scroll */
(function() {
    var scrollHandle = 0,
        scrollStep = 2,
        fs_interim_Parent = $('.fs-interim .scroll-container');
    //Start the scrolling process
    $(".fs-interim-panner").on("mouseenter touchstart", function() {
        var data = $(this).data('scrollModifier'),
            direction = parseInt(data, 10);
        $(this).addClass('active-scroll');
        startScrolling(direction, scrollStep);
    });
    //Kill the scrolling
    $(".fs-interim-panner").on("mouseleave", function() {
        stopScrolling();
        $(this).removeClass('active-scroll');
    });
    $(".fs-interim .scroll-container").on("touchstart click mouseenter", function() {
        stopScrolling();
        $(".fs-interim-panner").removeClass('active-scroll');
    });
    //Actual handling of the scrolling
    function startScrolling(modifier, step) {
        if (scrollHandle === 0) {
            scrollHandle = setInterval(function() {
                var newOffset = fs_interim_Parent.scrollLeft() + (scrollStep * modifier);

                fs_interim_Parent.scrollLeft(newOffset);
            }, 10);
        }
    }

    function stopScrolling() {
        clearInterval(scrollHandle);
        scrollHandle = 0;
    }
}());
/* end of fs-interim-scroll scroll */

/////////////////////////////// End Of Financial Statemenets Tab //////////////////////////////////////


/////////////////////////////// Financial Ratios Tab //////////////////////////////////////
/* accordion menu */
function showHideChild(fieldID) {
    var openAccordians = JSON.parse(sessionStorage.getItem("openAccordians")) || [];
    if ($("#btn" + fieldID).data("childviewstatus") == 'open') {
        $("tr[data-parentid='" + fieldID + "']").each(function() {
            $(this).hide();
        });

        $("#tr" + fieldID).removeClass('fTrOpen').addClass('fTrClose');
        $("#btn" + fieldID).removeClass('fOpen').addClass('fClose');

        $("#btn" + fieldID).data("childviewstatus", 'close');

        openAccordians = jQuery.grep(openAccordians, function(acordian) {
            return acordian != "#btn" + fieldID;
        });
        sessionStorage.setItem("openAccordians", JSON.stringify(openAccordians));

    } else {
        $("tr[data-parentid='" + fieldID + "']").each(function() {
            $(this).show();
        });

        $("#tr" + fieldID).removeClass('fTrClose').addClass('fTrOpen');
        $("#btn" + fieldID).removeClass('fClose').addClass('fOpen');

        $("#btn" + fieldID).data("childviewstatus", 'open');
        if (openAccordians.indexOf("#btn" + fieldID) == -1) {
            openAccordians.push("#btn" + fieldID);
            sessionStorage.setItem("openAccordians", JSON.stringify(openAccordians));
        }

    }
    return false;
}

function showHideSubStatement(fieldID) {
    var openAccordians = JSON.parse(sessionStorage.getItem("openAccordians")) || [];
    if ($("#btn" + fieldID).data("childviewstatus") == 'open') {
        $("tr[data-SubStatatementID='" + fieldID + "']").each(function() {
            $(this).hide();
        });

        $("#tr" + fieldID).removeClass('fTrOpen').addClass('fTrClose');
        $("#btn" + fieldID).removeClass('fOpen').addClass('fClose');
        $("#btn" + fieldID).data("childviewstatus", 'close');
        openAccordians = jQuery.grep(openAccordians, function(acordian) {
            return acordian != "#btn" + fieldID;
        });
        sessionStorage.setItem("openAccordians", JSON.stringify(openAccordians));
    } else {
        $("tr[data-SubStatatementID='" + fieldID + "']").each(function() {
            if ($(this).data("ischildelement") == 'no') {
                $(this).show();
            }
            if ($(this).data("haschildelementdata") == 'yes') {
                var fldID = $(this).attr('id');
                fldID = fldID.substring(2);
                $("#tr" + fldID).removeClass('fTrOpen').addClass('fTrClose');
                $("#btn" + fldID).removeClass('fOpen').addClass('fClose');
                $("#btn" + fldID).data("childviewstatus", 'close')
            }

        });

        $("#tr" + fieldID).removeClass('fTrClose').addClass('fTrOpen');
        $("#btn" + fieldID).removeClass('fClose').addClass('fOpen');

        $("#btn" + fieldID).data("childviewstatus", 'open');
        if (openAccordians.indexOf("#btn" + fieldID) == -1) {
            openAccordians.push("#btn" + fieldID);
            sessionStorage.setItem("openAccordians", JSON.stringify(openAccordians));
        }
    }
    return false;
}

/* end of accordion menu */


/* Main Financial ratio tabs */
let mainFinancialratioTabs = document.querySelectorAll(".main-financial-ratio__tabs li");
let mainFinancialratioTabsArray = Array.from(mainFinancialratioTabs);
let mainFinancialratioDivs = document.querySelectorAll("#financialRatioMain > div");
let mainFinancialratioDivsArray = Array.from(mainFinancialratioDivs);
//mainFinancialratioTabsArray.forEach((ele) => {
//ele.addEventListener("click", function(e) {
//  mainFinancialratioTabsArray.forEach((ele) => {
//      ele.classList.remove("active");
//  });
//  e.currentTarget.classList.add("active");
//  mainFinancialratioDivsArray.forEach((div) => {
//      div.style.display = "none";
//  });
//  document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
//});
//});
/* End Of Main Financial ratio tabs */



/* ra-annual-scroll scroll */
(function() {
    var scrollHandle = 0,
        scrollStep = 2,
        ra_annual_Parent = $('.ra-annual .scroll-container');
    //Start the scrolling process
    $(".ra-annual-panner").on("mouseenter touchstart", function() {
        var data = $(this).data('scrollModifier'),
            direction = parseInt(data, 10);
        $(this).addClass('active-scroll');
        startScrolling(direction, scrollStep);
    });
    //Kill the scrolling
    $(".ra-annual-panner").on("mouseleave", function() {
        stopScrolling();
        $(this).removeClass('active-scroll');
    });
    $(".ra-annual .scroll-container").on("touchstart click mouseenter", function() {
        stopScrolling();
        $(".ra-annual-panner").removeClass('active-scroll');
    });
    //Actual handling of the scrolling
    function startScrolling(modifier, step) {
        if (scrollHandle === 0) {
            scrollHandle = setInterval(function() {
                var newOffset = ra_annual_Parent.scrollLeft() + (scrollStep * modifier);

                ra_annual_Parent.scrollLeft(newOffset);
            }, 10);
        }
    }

    function stopScrolling() {
        clearInterval(scrollHandle);
        scrollHandle = 0;
    }
}());
/* end of ra-annual-scroll scroll */

/* ra-trailing-scroll scroll */
(function() {
    var scrollHandle = 0,
        scrollStep = 2,
        ra_trailing_Parent = $('.ra-trailing .scroll-container');
    //Start the scrolling process
    $(".ra-trailing-panner").on("mouseenter touchstart", function() {
        var data = $(this).data('scrollModifier'),
            direction = parseInt(data, 10);
        $(this).addClass('active-scroll');
        startScrolling(direction, scrollStep);
    });
    //Kill the scrolling
    $(".ra-trailing-panner").on("mouseleave", function() {
        stopScrolling();
        $(this).removeClass('active-scroll');
    });
    $(".ra-trailing .scroll-container").on("touchstart click mouseenter", function() {
        stopScrolling();
        $(".ra-trailing-panner").removeClass('active-scroll');
    });
    //Actual handling of the scrolling
    function startScrolling(modifier, step) {
        if (scrollHandle === 0) {
            scrollHandle = setInterval(function() {
                var newOffset = ra_trailing_Parent.scrollLeft() + (scrollStep * modifier);

                ra_trailing_Parent.scrollLeft(newOffset);
            }, 10);
        }
    }

    function stopScrolling() {
        clearInterval(scrollHandle);
        scrollHandle = 0;
    }
}());
/* end of ra-trailing-scroll scroll */

/* ra-annualized-scroll scroll */
(function() {
    var scrollHandle = 0,
        scrollStep = 2,
        ra_annualized_Parent = $('.ra-annualized .scroll-container');
    //Start the scrolling process
    $(".ra-annualized-panner").on("mouseenter touchstart", function() {
        var data = $(this).data('scrollModifier'),
            direction = parseInt(data, 10);
        $(this).addClass('active-scroll');
        startScrolling(direction, scrollStep);
    });
    //Kill the scrolling
    $(".ra-annualized-panner").on("mouseleave", function() {
        stopScrolling();
        $(this).removeClass('active-scroll');
    });
    $(".ra-annualized .scroll-container").on("touchstart click mouseenter", function() {
        stopScrolling();
        $(".ra-annualized-panner").removeClass('active-scroll');
    });
    //Actual handling of the scrolling
    function startScrolling(modifier, step) {
        if (scrollHandle === 0) {
            scrollHandle = setInterval(function() {
                var newOffset = ra_annualized_Parent.scrollLeft() + (scrollStep * modifier);

                ra_annualized_Parent.scrollLeft(newOffset);
            }, 10);
        }
    }

    function stopScrolling() {
        clearInterval(scrollHandle);
        scrollHandle = 0;
    }
}());
/* end of ra-annualized-scroll scroll */



/* Main Financial ratio tabs currency */

$('.main-financial-ratio__title__options__tabs li').click(function() {
    $('.main-financial-ratio__title__options__tabs li').removeClass('active');
    $(this).addClass('active');
});

// English Currency //
$('.main-financial-ratio__title__options__tabs__usd-en').click(function() {
    $('.ra-currency-en').text('USD')
})
$('.main-financial-ratio__title__options__tabs__riyal-en').click(function() {
    $('.ra-currency-en').text('Riyal')
})

// Arabic Currency //
$('.main-financial-ratio__title__options__tabs__usd-ar').click(function() {
    $('.ra-currency-ar').text('دولار')
})
$('.main-financial-ratio__title__options__tabs__riyal-ar').click(function() {
    $('.ra-currency-ar').text('ريال')
})

/*  end of Main Financial ratio tabs currency */



/* FR chart popup */
$(".fr-chart-btn").click(function() {
    $('body').addClass('hide-scroll');
    $('.fr-popup').show();
});
$('.fr-popup__overlay__chart__close svg').click(function() {
    $('body').removeClass('hide-scroll');
    $('.fr-popup').hide();

});
var FR_Popup = document.querySelector('.fr-popup__overlay')
FR_Popup.addEventListener("click", function(e) {
    if (e.target == FR_Popup) {
        $('.fr-popup').hide();
        $('body').removeClass('hide-scroll');
    }
});
/* End of FR chart popup */


/////////////////////////////// End Of Financial Ratios Tab ///////////////////////////////


////////////////////////////// Dividend Information Tab ///////////////////////////////////////////////

/* Main-Corporate-Actions tabs */
let mainCorporateActionsTabs = document.querySelectorAll(".main-corporate-actions__tabs li");
let mainCorporateActionsTabsArray = Array.from(mainCorporateActionsTabs);
let mainCorporateActionsDivs = document.querySelectorAll(".main-corporate-actions__container > div");
let mainCorporateActionsDivsArray = Array.from(mainCorporateActionsDivs);
mainCorporateActionsTabsArray.forEach((ele) => {
    ele.addEventListener("click", function(e) {
        mainCorporateActionsTabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        mainCorporateActionsDivsArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    });
});
/* End Of Main-Corporate-Actions tabs */

/* main-corporate-actions__capital-changes scroll */
(function() {
    var scrollHandle = 0,
        scrollStep = 2,
        capitalChangesParent = $('.main-corporate-actions__capital-changes');
    //Start the scrolling process
    $(".main-corporate-actions__panner").on("mouseenter touchstart", function() {
        var data = $(this).data('scrollModifier'),
            direction = parseInt(data, 10);
        $(this).addClass('active-scroll');
        startScrolling(direction, scrollStep);
    });
    //Kill the scrolling
    $(".main-corporate-actions__panner").on("mouseleave", function() {
        stopScrolling();
        $(this).removeClass('active-scroll');
    });
    $(".main-corporate-actions__capital-changes").on("touchstart click mouseenter", function() {
        stopScrolling();
        $(".main-corporate-actions__panner").removeClass('active-scroll');
    });
    //Actual handling of the scrolling
    function startScrolling(modifier, step) {
        if (scrollHandle === 0) {
            scrollHandle = setInterval(function() {
                var newOffset = capitalChangesParent.scrollLeft() + (scrollStep * modifier);

                capitalChangesParent.scrollLeft(newOffset);
            }, 10);
        }
    }

    function stopScrolling() {
        clearInterval(scrollHandle);
        scrollHandle = 0;
    }
}());
/* end of main-corporate-actions__capital-changes scroll */


/* main-corporate-actions__dividend-history scroll */
(function() {
    var scrollHandle = 0,
        scrollStep = 2,
        dividendHistoryParent = $('.main-corporate-actions__dividend-history');
    //Start the scrolling process
    $(".main-corporate-actions__panner").on("mouseenter touchstart", function() {
        var data = $(this).data('scrollModifier'),
            direction = parseInt(data, 10);
        $(this).addClass('active-scroll');
        startScrolling(direction, scrollStep);
    });
    //Kill the scrolling
    $(".main-corporate-actions__panner").on("mouseleave", function() {
        stopScrolling();
        $(this).removeClass('active-scroll');
    });
    $(".main-corporate-actions__dividend-history").on("touchstart click mouseenter", function() {
        stopScrolling();
        $(".main-corporate-actions__panner").removeClass('active-scroll');
    });
    //Actual handling of the scrolling
    function startScrolling(modifier, step) {
        if (scrollHandle === 0) {
            scrollHandle = setInterval(function() {
                var newOffset = dividendHistoryParent.scrollLeft() + (scrollStep * modifier);

                dividendHistoryParent.scrollLeft(newOffset);
            }, 10);
        }
    }

    function stopScrolling() {
        clearInterval(scrollHandle);
        scrollHandle = 0;
    }
}());
/* end of main-corporate-actions__dividend-history scroll */


//////////////////////////////// End Of Dividend Information Tab ///////////////////////////////////////