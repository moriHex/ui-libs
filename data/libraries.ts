import { Library } from "@/types/libraries.types"

export const libraries: Array<Library> = [
  {
    name: "Nuxt UI",
    logo: "nuxt.svg",
    url: "https://ui.nuxt.com",
    repoOwner: "nuxtlabs",
    repoName: "ui",
    package: "@nuxt/ui",
    componentMatchings: [
      "Accordion",
      "Alert",
      "Avatar",
      "Badge",
      "Button",
      // "Date Picker" // Available only as un example using dependency
      "Dropdown",
      "Keyboard Key",
      "Input",
      "Textarea",
      "Select",
      "Dropdown",
      "Checkbox",
      "Radio",
      "Toggle",
      "Range",
      "Table",
      "Vertical Navigation",
      "Command Palette",
      "Pagination",
      "Tabs",
      "Modal",
      "Slideover",
      "Popover",
      "Tooltip",
      "Context Menu",
      "Toast",
      "Card",
      "Container",
      "Skeleton",
      "Divider",
      "Progress",
    ],
    filterMatchings: [
      { id: "FStyled" },
      { id: "FImported" },
      { id: "FTailwind" },
      { id: "FComponents" },
      { id: "FFree" },
      { id: "FAccessible" },
      { id: "FSemanticColors" },
      { id: "FDarkMode" },
      { id: "FOfficial" },
      { id: "FRoadmap" },
      { id: "FRTLSupport" },
      { id: "FTyped" },
      { id: "FNuxt" },
      { id: "FForm" },
      { id: "FFigma" }, // https://www.figma.com/community/file/1288455405058138934/nuxt-ui
    ],
  },
  {
    name: "PrimeVue",
    logo: "primevue.svg",
    url: "https://primevue.org",
    repoOwner: "primefaces",
    repoName: "primevue",
    package: "primevue",
    componentMatchings: [
      "Auto Complete",
      "Date Picker",
      "Select",
      "Checkbox",
      "Input Chips",
      "Color Picker",
      "Dropdown",
      "Rich Text Editor",
      "Input Mask",
      "Toggle",
      "Button",
      "Select Button",
      "Toggle Button",
      "Input",
      "Knob",
      "Password Indicator",
      "Radio",
      "Rating",
      "Range",
      "Textarea",
      "Speed Dial",
      "Table",
      "Order List",
      "Tree",
      "Pagination",
      "Pick List",
      "Timeline",
      "Virtual Scroller",
      "Accordion",
      "Card",
      "Divider",
      "Scroll Bar",
      "Panel Splitter",
      "Tabs",
      "Modal",
      "Popover",
      "Slideover",
      "Tooltip",
      "File Input",
      "OTP Input",
      "Breadcrumb",
      "Context Menu",
      "Dock",
      "Vertical Navigation",
      "Steps",
      "Alert",
      "Toast",
      "Carousel",
      "Avatar",
      "Badge",
      "Indicator",
      "Scroll Top",
      "Skeleton",
      "Progress",
      "Listbox",
    ],
    filterMatchings: [
      { id: "FStyled" },
      { id: "FUnstyled" },
      { id: "FImported" },
      { id: "FTailwind" }, // but not forced, two versions
      { id: "FComponents" },
      { id: "FAccessible" },
      { id: "FFigma" },
      { id: "FFree" }, // not for Figma
      { id: "FRoadmap" }, // https://primevue.org/roadmap/
      { id: "FThemeGenerator" }, // https://designer.primevue.org/
      { id: "FBuiltinThemes" }, // https://primevue.org/theming/#builtinthemes
      { id: "FSemanticColors" }, // https://primevue.org/colors/
      { id: "FVue" },
      { id: "FTyped" },
      { id: "FForm" },
      { id: "FDarkMode" },
    ],
  },
  {
    name: "Quasar",
    logo: "quasar.svg",
    logoDark: "quasar_dark.svg",
    url: "https://quasar.dev",
    repoOwner: "quasarframework",
    repoName: "quasar",
    package: "quasar",
    componentMatchings: [
      "Avatar",
      "Indicator",
      "Badge",
      "Breadcrumb",
      "Button",
      "Dropdown",
      "Card",
      "Carousel",
      "Chat Bubble",
      "Progress",
      "Color Picker",
      "Modal",
      "Rich Text Editor",
      "Accordion",
      "Speed Dial",
      "Input",
      "Select",
      "File Input",
      "Radio",
      "Checkbox",
      "Toggle",
      "Range",
      "Date Picker",
      "Knob",
      "Table",
      "Pagination",
      "Rating",
      "Divider",
      "Skeleton",
      "Panel Splitter",
      "Steps",
      "Tabs",
      "Timeline",
      "Tooltip",
      "Tree",
      "Virtual Scroller",
    ],
    filterMatchings: [
      { id: "FVue" },
      { id: "FRTLSupport" }, // https://quasar.dev/options/rtl-support/
      { id: "FThemeGenerator" }, // https://quasar.dev/style/theme-builder
      { id: "FDarkMode" }, // https://quasar.dev/style/dark-mode
      { id: "FStyled" },
      { id: "FImported" },
      { id: "FComponents" },
      { id: "FFree" },
      { id: "FRoadmap" }, // https://github.com/quasarframework/quasar/blob/dev/ROADMAP.md
      { id: "FSemanticColors" },
    ],
  },
  {
    name: "Vuetify",
    logo: "vuetify.svg",
    url: "https://vuetifyjs.com",
    repoOwner: "vuetifyjs",
    repoName: "vuetify",
    package: "vuetify",
    componentMatchings: [
      "Button",
      "Card",
      "Badge",
      "Divider",
      "Accordion",
      "Dropdown",
      "Modal",
      "Tooltip",
      "Slideover",
      "Pagination",
      "Bottom Tabs",
      "Breadcrumb",
      "Tabs",
      "Auto Complete",
      "Input",
      "Checkbox",
      "Toggle",
      "Radio",
      "File Input",
      "OTP Input",
      "Select",
      "Range",
      "Textarea",
      "Carousel",
      "Steps",
      "Table",
      "Virtual Scroller",
      "Alert",
      "Indicator",
      "Skeleton",
      "Toast",
      "Rating",
      "Timeline",
      "Progress",
      "Avatar",
      "Color Picker",
      "Date Picker",
    ],
    filterMatchings: [
      { id: "FStyled" },
      { id: "FImported" },
      { id: "FComponents" },
      { id: "FAccessible" }, // https://vuetifyjs.com/en/features/accessibility/
      { id: "FVue" },
      { id: "FRoadmap" }, // https://vuetifyjs.com/en/introduction/roadmap/
      { id: "FFree" },
      { id: "FFigma" }, // https://store.vuetifyjs.com/products/vuetify-ui-kit-figma
      { id: "FDarkMode" },
      { id: "FThemeGenerator" },
      { id: "FSemanticColors" },
      { id: "FBuiltinThemes" }, // https://vuetifyjs.com/en/resources/themes/
      { id: "FForm" }, // https://vuetifyjs.com/en/components/forms/
    ],
  },
  {
    name: "Radix Vue",
    logo: "radixvue.svg",
    url: "https://www.radix-vue.com/",
    repoOwner: "radix-vue",
    repoName: "radix-vue",
    package: "radix-vue",
    componentMatchings: [
      "Accordion",
      "Modal", // Alert Dialog
      "Avatar",
      "Checkbox",
      // Collapsible -> Accordion
      "Dropdown", // Combobox
      "Context Menu",
      // Dialog -> Modal
      // Dropdown
      "Tooltip", // Hover Card
      // Label
      // Menubar
      // Navigation Menu
      "Pagination",
      "Popover",
      "Progress",
      "Radio",
      "Scroll Bar",
      "Select",
      "Divider", // Separator
      "Range", // Slider
      "Toggle", // switch
      "Tabs",
      "Toast",
      "Toggle Button",
      // Toggle Group
      // Toolbar
    ],
    filterMatchings: [
      { id: "FVue" },
      { id: "FUnstyled" },
      { id: "FImported" },
      { id: "FComponents" },
      { id: "FFree" },
      { id: "FAccessible" },
      { id: "FTyped" },
      { id: "FRoadmap" }, // https://github.com/orgs/radix-vue/projects/1
    ],
  },
  {
    name: "Shadcn-vue",
    subName: "on top of Radix Vue",
    logo: "shadcn.png",
    url: "https://www.shadcn-vue.com",
    repoOwner: "radix-vue",
    repoName: "shadcn-vue",
    package: "shadcn-vue",
    componentMatchings: [
      "Accordion",
      "Alert",
      "Modal",
      "Avatar",
      "Badge",
      "Button",
      "Card",
      "Checkbox",
      "Dropdown",
      "Command Palette",
      "Context Menu",
      "Date Picker",
      "Popover",
      "Input",
      "Progress",
      "Scroll Bar",
      "Select",
      "Divider",
      "Slideover",
      "Skeleton",
      "Range",
      "Toggle",
      "Table",
      "Tabs",
      "Textarea",
      "Tooltip",
    ],
    filterMatchings: [
      { id: "FStyled" },
      { id: "FPasted" },
      { id: "FTailwind" },
      { id: "FComponents" },
      { id: "FVue" },
      { id: "FThemeGenerator" },
      { id: "FDarkMode" },
      { id: "FFigma" },
      { id: "FFree" },
      { id: "FAccessible" },
    ],
  },
  {
    name: "Headless UI",
    repoOwner: "tailwindlabs",
    repoName: "headlessui",
    package: "@headlessui/vue",
    logo: "headlessui.svg",
    url: "https://headlessui.com/",
    componentMatchings: [
      "Dropdown",
      "Command Palette",
      "Toggle",
      "Accordion",
      "Modal",
      "Popover",
      "Radio",
      "Tabs",
    ],
    filterMatchings: [
      { id: "FUnstyled" },
      { id: "FComponents" },
      { id: "FImported" },
      { id: "FTailwind" },
      { id: "FAccessible" },
      { id: "FFree" },
      { id: "FOfficial" },
      { id: "FVue" },
    ],
  },
  {
    name: "Tailwind UI",
    subName: "on top of Headless UI",
    logo: "tailwind.svg",
    url: "https://tailwindui.com",
    componentMatchings: [
      "Popover",
      "Select",
      "Input",
      "Textarea",
      "Radio",
      "Checkbox",
      "Toggle",
      "Modal",
      "Alert",
      "Pagination",
      "Tabs",
      "Vertical Navigation",
      "Slideover",
      "Breadcrumb",
      "Steps",
      "Command Palette",
      "Toast",
      "Avatar",
      "Badge",
      "Dropdown",
      "Button",
      "Divider",
      "Container",
      "Card",
      "Calendar",
    ],
    filterMatchings: [
      { id: "FStyled" },
      { id: "FPasted" },
      { id: "FComponents" },
      { id: "FTailwind" },
      { id: "FAccessible" },
      { id: "FOfficial" },
    ],
  },
  {
    name: "Naive UI",
    logo: "naiveui.svg",
    url: "https://www.naiveui.com/",
    repoOwner: "tusen-ai",
    repoName: "naive-ui",
    package: "naive-ui",
    componentMatchings: [
      "Avatar",
      "Button",
      "Carousel",
      "Accordion",
      "Divider",
      "Dropdown",
      "Popover",
      "Breadcrumb",
      "Watermark",
      "Auto Complete",
      "Color Picker",
      "Checkbox",
      "Date Picker",
      "Input Chips", // dynamic tags
      "Input",
      "Radio",
      "Rating",
      "Select",
      "Range",
      "Toggle",
      "Pick List",
      "File Input",
      "Calendar",
      "Table",
      "Timeline",
      "Tree",
      "Scroll Spy",
      "Scroll Top",
      "Pagination",
      "Steps",
      "Tabs",
      "Alert",
      "Indicator",
      "Modal",
      "Slideover",
      "Toast",
      "Progress",
      "Skeleton",
      "Tooltip",
      "Scroll Bar",
    ],
    filterMatchings: [
      { id: "FVue" },
      { id: "FTyped" },
      { id: "FThemeGenerator" },
      { id: "FImported" },
      { id: "FStyled" },
      { id: "FComponents" },
      { id: "FFree" },
      { id: "FSemanticColors" },
      { id: "FForm" },
      { id: "FDarkMode" },
      // { id: "FFigma" }, // sketch, not Figma.
    ],
  },
  {
    name: "Daisy UI",
    repoOwner: "saadeghi",
    repoName: "daisyui",
    package: "daisyui",
    logo: "daisyui.svg",
    url: "https://daisyui.com",
    componentMatchings: [
      "Accordion",
      "Alert",
      "Avatar",
      "Badge",
      "Bottom Tabs",
      "Breadcrumb",
      "Button",
      "Card",
      "Carousel",
      "Chat Bubble",
      "Checkbox",
      "Divider",
      "File Input",
      "Indicator",
      "Input",
      "Keyboard Key",
      "Vertical Navigation",
      "Mockup",
      "Modal",
      "Pagination",
      "Progress",
      "Radio",
      "Range",
      "Rating",
      "Select",
      "Slideover",
      "Stack",
      "Steps",
      "Swap",
      "Tabs",
      "Table",
      "Textarea",
      "Toggle",
      "Tooltip",
      "Popover",
    ],
    filterMatchings: [
      { id: "FStyled" },
      { id: "FImported" },
      { id: "FCSS" },
      { id: "FTailwind" },
      { id: "FFree" },
      { id: "FBuiltinThemes" },
      { id: "FThemeGenerator" },
      { id: "FSemanticColors" },
      { id: "FDarkMode" },
      { id: "FRTLSupport" },
    ],
  },
  {
    name: "Flowbite Vue",
    logo: "flowbite-vue.svg",
    url: "https://flowbite-vue.com",
    repoOwner: "themesberg",
    repoName: "flowbite-vue",
    package: "flowbite-vue",
    componentMatchings: [
      "Accordion",
      "Alert",
      "Avatar",
      "Breadcrumb",
      "Button",
      "Badge",
      "Card",
      "Carousel",
      "Dropdown",
      "Pagination",
      "Progress",
      "Rating",
      "Table",
      "Tabs",
      "Timeline",
      "Tooltip",
      "Modal",
      "Vertical Navigation",
      "Input",
      "File Input",
      "Checkbox",
      "Select",
      "Toast",
      "Toggle",
      "Textarea",
      "Range",
      "Radio",
    ],
    filterMatchings: [
      { id: "FStyled" },
      { id: "FComponents" },
      { id: "FTailwind" },
      { id: "FFree" },
      { id: "FFigma" },
      { id: "FVue" },
    ],
  },
  {
    name: "Element Plus",
    logo: "element-plus.svg",
    url: "https://element-plus.org",
    repoOwner: "element-plus",
    repoName: "element-plus",
    package: "element-plus",
    componentMatchings: [
      "Button",
      "Scroll Bar",
      "Auto Complete",
      "Checkbox",
      "Color Picker",
      "Date Picker",
      "Input",
      "Radio",
      "Rating",
      "Dropdown",
      "Range",
      "Toggle",
      "Pick List",
      "File Input",
      "Avatar",
      "Indicator",
      "Calendar",
      "Card",
      "Carousel",
      "Accordion",
      "Pagination",
      "Progress",
      "Skeleton",
      "Table",
      "Badge",
      "Timeline",
      "Tree",
      "Scroll Top",
      "Breadcrumb",
      "Steps",
      "Tabs",
      "Alert",
      "Modal",
      "Slideover",
      "Toast",
      "Popover",
      "Tooltip",
      "Divider",
      "Virtual Scroller",
    ],
    filterMatchings: [
      { id: "FStyled" },
      { id: "FVue" },
      { id: "FTyped" },
      { id: "FDarkMode" },
      { id: "FRoadmap" }, // https://github.com/orgs/element-plus/projects/1
      { id: "FImported" },
      { id: "FComponents" },
      { id: "FFree" },
      { id: "FFigma" }, // https://element-plus.org/en-US/resource/index.html
      { id: "FSemanticColors" },
      { id: "FForm" }, // https://element-plus.org/en-US/component/form.html
    ],
  },
  {
    name: "Ant Design Vue",
    logo: "antvue.svg",
    url: "https://antdv.com",
    repoOwner: "vueComponent",
    repoName: "ant-design-vue",
    package: "ant-design-vue",
    componentMatchings: [
      "Button",
      "Divider",
      "Breadcrumb",
      "Dropdown",
      "Pagination",
      "Steps",
      "Auto Complete",
      "Checkbox",
      "Date Picker",
      "Input",
      "Radio",
      "Rating",
      "Select",
      "Range",
      "Toggle",
      "Pick List",
      "File Input",
      "Avatar",
      "Indicator",
      "Calendar",
      "Card",
      "Carousel",
      "Accordion",
      "Popover",
      "Select Button",
      "Table",
      "Tabs",
      "Badge",
      "Timeline",
      "Tooltip",
      "Tour",
      "Tree",
      "Alert",
      "Slideover",
      "Toast",
      "Modal",
      "Progress",
      "Skeleton",
      "Speed Dial",
      "Watermark",
    ],
    filterMatchings: [
      { id: "FStyled" },
      { id: "FImported" },
      { id: "FComponents" },
      { id: "FVue" },
      { id: "FFree" },
      { id: "FFigma" },
      { id: "FSemanticColors" },
      { id: "FForm" },
    ],
  },
  {
    name: "Ark UI",
    logo: "arkui.svg",
    url: "https://ark-ui.com",
    repoOwner: "chakra-ui",
    repoName: "ark",
    package: "@ark-ui/vue",
    componentMatchings: [
      "Accordion",
      "Avatar",
      "Carousel",
      "Checkbox",
      "Color Picker",
      "Date Picker",
      "Modal", // As Dialog
      "Input", // As Number Input and Pin Input
      "Input Chips", // As Tags Input
      "File Input", // As File Upload
      "Pagination",
      "Popover",
      "Progress", // Circular and Linear
      "QR Code",
      "Radio", // As Radio Group
      "Rating", // As Rating Group
      "Select",
      "Signature Pad",
      "Range",
      "Panel Splitter", // As Splitter
      "Steps",
      "Tabs",
      "Toast",
      "Toggle", // As Switch
      "Toggle Button", // As Toggle
      "Tooltip",
      "Tree", // As Tree View
    ],
    filterMatchings: [
      { id: "FUnstyled" },
      { id: "FImported" },
      { id: "FComponents" },
      { id: "FFree" },
      { id: "FAccessible" },
      { id: "FRoadmap" }, // https://ark-ui.canny.io
      { id: "FTyped" },
      { id: "FVue" },
    ],
  },
  {
    name: "Vuestic UI",
    logo: "vuestic-ui.png",
    url: "https://ui.vuestic.dev",
    repoOwner: "epicmaxco",
    repoName: "vuestic-ui",
    package: "vuestic-ui",
    componentMatchings: [
      "Accordion", // also have a Collapse
      "Auto Complete", // used as prop in Select
      "Alert",
      "Avatar",
      "Scroll Top", // called BackTop
      "Badge", // called Badge or Chip
      "Indicator", // called Badge
      "Breadcrumb", // called Breadcrumbs
      "Button",
      "Select Button", // called ButtonGroup
      "Toggle Button", // called ButtonToggle
      "Card",
      "Carousel",
      "Checkbox",
      "Input Chips", // chips prop in select and Chip component
      "Input Mask", // uses Cleave under the hood
      // 'ColorInput', // uses native color picker
      // 'Config', // Scoped props provider
      // 'Counter', // Number input
      "Table", // called DataTable or Table
      "Date Picker", // called 'DateInput'
      "Calendar", // called 'Datepicker'
      "Divider", // called 'Divider' or Separator'
      "Dropdown",
      "Context Menu", // have an example of Dropdown usage
      "File Input", // called 'FileInput'
      // 'Form',
      // 'Icon',
      // 'Image',
      // 'InfiniteScroll',
      // 'InnerLoading',
      "Input",
      // 'Layout', // Used instead of Drawers
      "Modal",
      // 'Navbar',
      "Pagination",
      // 'Parallax',
      "Popover", // called Dropdown
      "Tooltip", // called 'Popover'
      "Progress", // called ProgressBar and ProgressCircle or InnerLoading
      "Radio",
      "Rating",
      "Select",
      "Toast",
      // 'Sidebar', // is it vertical navigation?
      "Range", // called Slider
      "Skeleton",
      "Steps", // called Stepper
      "Panel Splitter", // called Split
      "Toggle", // called Switch
      "Tabs",
      // 'TimeInput',
      // 'TimePicker',
      "Tree", // called TreeView
      // 'ScrollContainer', // Uses native scroll
      "Virtual Scroller",
      "Textarea",
    ],
    filterMatchings: [
      { id: "FAccessible" },
      { id: "FComponents" },
      { id: "FStyled" },
      // { id: 'FTailwind' }, // Not made with Tailwind, but do not conflict and
      // have utilities to use Tailwind classes tougher
      { id: "FFree" },
      { id: "FSemanticColors" },
      { id: "FImported" },
      { id: "FRoadmap" }, // Open dev discussion in Discord + Roadmap in docs
      { id: "FDarkMode" },
      { id: "FVue" },
      { id: "FForm" },
      { id: "FTyped" },
    ],
  },
]
