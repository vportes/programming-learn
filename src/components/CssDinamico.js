import { useEffect } from 'react';

const DynamicCssVars = () => {
    useEffect(() => {
        const updateCssVariables = () => {
            const topBar = document.querySelector('.top-bar');
            const topBarHeight = topBar ? topBar.offsetHeight : 60;
            document.documentElement.style.setProperty('--top-bar-height', `${topBarHeight}px`);
        };

        updateCssVariables();
        window.addEventListener('resize', updateCssVariables);

        return () => {
            window.removeEventListener('resize', updateCssVariables);
        };
    }, []);

    return null;
};

export default DynamicCssVars;
