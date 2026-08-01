window.chatHelpers = {
    autoResize: function (el) {
        try {
            if (!el) return;
            el.style.height = 'auto';
            const newHeight = Math.min(el.scrollHeight, 220);
            el.style.height = newHeight + 'px';
        } catch (e) { /* ignore */ }
    },
    focusPulse: function (el) {
        try {
            if (!el) return;
            el.classList.add('focus-pulse');
            setTimeout(() => el.classList.remove('focus-pulse'), 420);
        } catch (e) { /* ignore */ }
    }
};
