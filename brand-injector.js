/**
 * Brand Injector
 * Injects centralized brand messaging into the page
 */

(function() {
    // Wait for brand config to load
    function injectBrand() {
        if (!window.BrandConfig) {
            setTimeout(injectBrand, 50);
            return;
        }

        const config = window.BrandConfig;

        // Update top banner
        const topBanner = document.querySelector('.top-banner');
        if (topBanner) {
            topBanner.textContent = config.topBanner;
        }

        // Update page title if it contains the old tagline
        if (document.title.includes('Dev Shop by Developers Who Are Doctors')) {
            document.title = `${config.companyName} - ${config.tagline}`;
        }

        // Update hero h1 if it exists
        const heroH1 = document.querySelector('.hero h1');
        if (heroH1 && heroH1.textContent.includes('Dev Shop by Developers Who Are Doctors')) {
            heroH1.textContent = config.tagline;
        }

        // Update hero description if it exists
        const heroIntro = document.querySelector('.hero .intro');
        if (heroIntro) {
            heroIntro.textContent = config.companyDescriptionLong;
        }

        // Update hero subtitle if it exists
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            heroSubtitle.textContent = config.companyDescription.split('.')[0] + '.';
        }
    }

    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectBrand);
    } else {
        injectBrand();
    }
})();

