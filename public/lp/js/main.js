(function () {

  "use strict";



  var WA_URL =

    "https://wa.me/919898837713?text=Hello%2C%20I%20am%20interested%20in%20your%20products.";

  var STORAGE_POPUP = "vcp_enquiry_popup_shown";

  var STORAGE_MANUAL = "vcp_enquiry_manual";

  var STORAGE_SUBMITTED = "vcp_enquiry_submitted";

  var THANKYOU_PARAM = "thankyou";

  var API_ENQUIRY = "/api/enquiry";



  var modal = document.getElementById("enquiry-modal");

  var modalDialog = modal ? modal.querySelector(".modal__dialog") : null;

  var openTriggers = document.querySelectorAll("[data-open-enquiry]");

  var closeTriggers = document.querySelectorAll("[data-close-enquiry]");

  var thankyouView = document.getElementById("thankyou-view");

  var siteMain = document.getElementById("top");

  var siteFooter = document.querySelector(".site-footer");

  var lastFocus = null;

  var autoTimer = null;



  function track(eventName, payload) {

    // CONVERSION TRACKING PLACEHOLDER — wire GTM / gtag / Meta Pixel here

    // Events: form_submit_popup | form_submit_inline | thankyou_pageview | whatsapp_click | header_enquire_click

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push(

      Object.assign({ event: eventName }, payload || {})

    );

    if (typeof window.gtag === "function") {

      // gtag("event", eventName, payload || {});

      // Google Ads conversion example (fire on thankyou_pageview):

      // gtag("event", "conversion", { send_to: "AW-XXXXXXXXX/YYYYYYYYYY" });

    }

  }



  function markManual() {

    try {

      sessionStorage.setItem(STORAGE_MANUAL, "1");

    } catch (e) {}

  }



  function markPopupShown() {

    try {

      sessionStorage.setItem(STORAGE_POPUP, "1");

    } catch (e) {}

  }



  function markSubmitted() {

    try {

      sessionStorage.setItem(STORAGE_SUBMITTED, "1");

    } catch (e) {}

  }



  function wasManual() {

    try {

      return sessionStorage.getItem(STORAGE_MANUAL) === "1";

    } catch (e) {

      return false;

    }

  }



  function wasPopupShown() {

    try {

      return sessionStorage.getItem(STORAGE_POPUP) === "1";

    } catch (e) {

      return false;

    }

  }



  function wasSubmitted() {

    try {

      return sessionStorage.getItem(STORAGE_SUBMITTED) === "1";

    } catch (e) {

      return false;

    }

  }



  function isThankYouUrl() {

    try {

      var params = new URLSearchParams(window.location.search);

      var value = params.get(THANKYOU_PARAM);

      return value === "1" || value === "true" || value === "yes";

    } catch (e) {

      return /[?&]thankyou=(1|true|yes)(?:&|$)/i.test(window.location.search);

    }

  }



  function buildThankYouUrl() {

    try {

      var url = new URL(window.location.href);

      url.searchParams.set(THANKYOU_PARAM, "1");

      url.hash = "";

      return url.toString();

    } catch (e) {

      var path = window.location.pathname || "index.html";

      var base = window.location.href.split("?")[0].split("#")[0];

      if (!base) base = path;

      return base + "?thankyou=1";

    }

  }



  function goToThankYou() {

    var next = buildThankYouUrl();

    // file:// may not navigate cleanly with search params in some browsers —

    // still attempt location assign; showThankYouState also runs on load.

    window.location.assign(next);

  }



  function showThankYouState() {

    markSubmitted();

    markManual();

    markPopupShown();

    if (autoTimer) {

      clearTimeout(autoTimer);

      autoTimer = null;

    }

    closeModal();



    document.body.classList.add("is-thankyou");

    if (thankyouView) {

      thankyouView.hidden = false;

      thankyouView.setAttribute("aria-hidden", "false");

    }

    if (siteMain) siteMain.setAttribute("aria-hidden", "true");

    if (siteFooter) siteFooter.setAttribute("aria-hidden", "true");

    if (modal) modal.setAttribute("aria-hidden", "true");



    // CONVERSION TRACKING — fire Ads conversion on thank-you URL / pageview

    track("thankyou_pageview", {

      page: "thankyou",

      thankyou: "1",

      path: window.location.pathname || "",

    });



    window.setTimeout(function () {

      var heading = document.getElementById("thankyou-title");

      if (heading) heading.focus();

    }, 50);

  }



  function getFocusable(container) {

    return Array.prototype.slice.call(

      container.querySelectorAll(

        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

      )

    ).filter(function (el) {

      return !el.hasAttribute("disabled") && el.offsetParent !== null;

    });

  }



  function setProductSelection(productName) {

    if (!productName) return;

    var selects = document.querySelectorAll('select[name="product"]');

    selects.forEach(function (select) {

      var matched = false;

      Array.prototype.forEach.call(select.options, function (opt) {

        if (opt.value === productName || opt.textContent === productName) {

          opt.selected = true;

          matched = true;

        }

      });

      if (!matched) {

        // Fallback: add temporary option if label is new

        var opt = document.createElement("option");

        opt.value = productName;

        opt.textContent = productName;

        opt.selected = true;

        select.appendChild(opt);

      }

    });

  }



  function openModal(opts) {

    if (!modal || document.body.classList.contains("is-thankyou")) return;

    opts = opts || {};

    lastFocus = document.activeElement;



    if (opts.product) {

      setProductSelection(opts.product);

    }



    modal.classList.add("is-open");

    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    markPopupShown();



    if (opts.manual) {

      markManual();

    }



    window.setTimeout(function () {

      var focusables = getFocusable(modalDialog);

      if (focusables.length) focusables[0].focus();

    }, 30);

  }



  function closeModal() {

    if (!modal || !modal.classList.contains("is-open")) return;

    modal.classList.remove("is-open");

    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    if (lastFocus && typeof lastFocus.focus === "function") {

      lastFocus.focus();

    }

  }



  openTriggers.forEach(function (btn) {

    btn.addEventListener("click", function () {

      if (document.body.classList.contains("is-thankyou")) return;

      var source = btn.getAttribute("data-open-enquiry") || "unknown";

      var product = btn.getAttribute("data-product") || "";

      if (source === "header") {

        track("header_enquire_click", { source: "header" });

      }

      if (source === "product" && product) {

        track("product_enquire_click", { source: "product", product: product });

      }

      openModal({ manual: true, product: product });

      if (autoTimer) {

        clearTimeout(autoTimer);

        autoTimer = null;

      }

    });

  });



  closeTriggers.forEach(function (el) {

    el.addEventListener("click", closeModal);

  });



  document.addEventListener("keydown", function (e) {

    if (e.key === "Escape" && modal && modal.classList.contains("is-open")) {

      closeModal();

      return;

    }



    if (e.key !== "Tab" || !modal || !modal.classList.contains("is-open")) return;

    var focusables = getFocusable(modalDialog);

    if (!focusables.length) return;

    var first = focusables[0];

    var last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {

      e.preventDefault();

      last.focus();

    } else if (!e.shiftKey && document.activeElement === last) {

      e.preventDefault();

      first.focus();

    }

  });



  // Thank-you URL view (Google Ads conversion landing)

  if (isThankYouUrl()) {

    showThankYouState();

  }



  // Auto popup: 15s once per session; skip if user already opened/submitted or on thank-you

  if (

    !isThankYouUrl() &&

    !wasSubmitted() &&

    !wasPopupShown() &&

    !wasManual()

  ) {

    autoTimer = window.setTimeout(function () {

      if (

        wasManual() ||

        wasPopupShown() ||

        wasSubmitted() ||

        document.body.classList.contains("is-thankyou")

      ) {

        return;

      }

      openModal({ manual: false });

    }, 15000);

  }



  // WhatsApp tracking

  document.querySelectorAll("[data-track-whatsapp]").forEach(function (el) {

    el.addEventListener("click", function () {

      track("whatsapp_click", {

        source: el.getAttribute("data-track-whatsapp") || "unknown",

      });

    });

  });



  function setError(field, message) {

    var wrap = field.closest(".field");

    var err = wrap ? wrap.querySelector(".field-error") : null;

    field.setAttribute("aria-invalid", message ? "true" : "false");

    if (err) err.textContent = message || "";

  }



  function validateForm(form) {

    var valid = true;

    var required = form.querySelectorAll("[required]");

    required.forEach(function (field) {

      var value = (field.value || "").trim();

      if (!value) {

        setError(field, "Required");

        valid = false;

        return;

      }

      if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {

        setError(field, "Enter a valid business email");

        valid = false;

        return;

      }

      if (field.name === "phone" && value.replace(/\D/g, "").length < 8) {

        setError(field, "Include country code and number");

        valid = false;

        return;

      }

      setError(field, "");

    });

    return valid;

  }



  function collectPayload(form, source) {

    var el = form.elements;

    return {

      fullName: (el.fullName && el.fullName.value) || "",

      company: (el.company && el.company.value) || "",

      country: (el.country && el.country.value) || "",

      email: (el.email && el.email.value) || "",

      phone: (el.phone && el.phone.value) || "",

      product: (el.product && el.product.value) || "",

      quantity: (el.quantity && el.quantity.value) || "",

      message: (el.message && el.message.value) || "",

      source: source,

    };

  }



  function resetSubmitButton(submitBtn) {

    if (!submitBtn) return;

    submitBtn.disabled = false;

    submitBtn.textContent = "Request a Quote";

  }



  function handleSubmit(form, source) {

    form.addEventListener("submit", function (e) {

      e.preventDefault();

      var status = form.querySelector(".form-status");

      if (!validateForm(form)) {

        if (status) {

          status.className = "form-status form-status--error is-visible";

          status.textContent = "Please complete the required fields.";

          status.setAttribute("role", "alert");

        }

        var firstBad = form.querySelector('[aria-invalid="true"]');

        if (firstBad) firstBad.focus();

        return;

      }



      var submitBtn = form.querySelector('[type="submit"]');

      if (submitBtn) {

        submitBtn.disabled = true;

        submitBtn.textContent = "Sending…";

      }

      if (status) {

        status.className = "form-status";

        status.textContent = "";

        status.removeAttribute("role");

      }



      var payload = collectPayload(form, source);



      fetch(API_ENQUIRY, {

        method: "POST",

        headers: { "Content-Type": "application/json", Accept: "application/json" },

        body: JSON.stringify(payload),

      })

        .then(function (res) {

          return res

            .json()

            .catch(function () {

              return { ok: false, error: "Unexpected server response." };

            })

            .then(function (data) {

              return { ok: res.ok && data && data.ok, data: data, status: res.status };

            });

        })

        .then(function (result) {

          if (!result.ok) {

            var message =

              (result.data && result.data.error) ||

              "Unable to send your enquiry. Please try again or contact us on WhatsApp.";

            if (status) {

              status.className = "form-status form-status--error is-visible";

              status.textContent = message;

              status.setAttribute("role", "alert");

            }

            resetSubmitButton(submitBtn);

            return;

          }



          markSubmitted();

          markManual();

          markPopupShown();

          if (autoTimer) {

            clearTimeout(autoTimer);

            autoTimer = null;

          }



          // CONVERSION TRACKING — form submit event (optional; prefer thank-you pageview for Ads)

          track(source === "popup" ? "form_submit_popup" : "form_submit_inline", {

            product: payload.product,

            country: payload.country,

          });



          // Redirect to Ads-friendly thank-you URL on same path

          goToThankYou();

        })

        .catch(function () {

          if (status) {

            status.className = "form-status form-status--error is-visible";

            status.textContent =

              "Network error. Please check your connection or message us on WhatsApp.";

            status.setAttribute("role", "alert");

          }

          resetSubmitButton(submitBtn);

        });

    });



    form.querySelectorAll("input, select, textarea").forEach(function (field) {

      field.addEventListener("input", function () {

        if (field.getAttribute("aria-invalid") === "true") setError(field, "");

      });

      field.addEventListener("change", function () {

        if (field.getAttribute("aria-invalid") === "true") setError(field, "");

      });

    });

  }



  var inlineForm = document.getElementById("enquiry-form-inline");

  var popupForm = document.getElementById("enquiry-form-popup");

  if (inlineForm) handleSubmit(inlineForm, "inline");

  if (popupForm) handleSubmit(popupForm, "popup");



  // Scroll reveal

  var reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    var io = new IntersectionObserver(

      function (entries) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add("is-in");

            io.unobserve(entry.target);

          }

        });

      },

      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }

    );

    reveals.forEach(function (el) {

      io.observe(el);

    });

  } else {

    reveals.forEach(function (el) {

      el.classList.add("is-in");

    });

  }



  // Expose WA URL for any dynamic use

  window.VCP = {

    waUrl: WA_URL,

    openEnquiry: function (product) {

      openModal({ manual: true, product: product || "" });

    },

  };

})();


