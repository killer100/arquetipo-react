export const OPEN_SIDEBAR = '[SIDEBAR] open';
export const HIDE_SIDEBAR = '[SIDEBAR] hide';

export const openSidebar = () => ({
	type: OPEN_SIDEBAR
})

export const hideSidebar = () => ({
	type: HIDE_SIDEBAR
});