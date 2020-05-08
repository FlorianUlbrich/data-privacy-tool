import Vue from 'vue'

import './styles/quasar.styl'
import 'quasar/dist/quasar.ie.polyfills'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/mdi-v4/mdi-v4.css'
import '@quasar/extras/animate/heartBeat.css'
import {
    Quasar,
    QBar,
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QCheckbox,
    QIcon,
    QList,
    QLinearProgress,
    QItem,
    QItemSection,
    Dialog,
    QItemLabel,
    QDialog,
    QAvatar,
    QSeparator,
    QCard,
    QCardSection,
    QCardActions,
    QInput,
    QExpansionItem,
    QStepper,
    QStep,
    QStepperNavigation,
    LoadingBar,
    Loading,
    QSplitter,
    QSelect,
    QSpinner,
    QSpinnerTail,
    QTable,
    QTd,
    QTr,
    QTh,
    QBadge,
    QPopupEdit,
    QSpace,
    QTooltip,
    Notify,
    AppFullscreen,
    QTree,
    QScrollArea,
    QMenu,
    QChip,
    ClosePopup,
    QPageSticky,
    QRadio,
    QBreadcrumbs,
    QBreadcrumbsEl,
    QTabs,
    QTab,
    QRouteTab,
    QTabPanels,
    QTabPanel,
    QToggle,
    QField,
    QPagination
} from 'quasar'

Vue.use(Quasar, {
    config: {
        loadingBar: {
            color: 'primary',
            size: '2px'
        },
        loading: {
            spinner: QSpinnerTail,
            spinnerSize: '65px'
        },
        notify: {
            progress: true,
            textColor: 'white',
            position: 'top',
            timeout: 2000,
            actions: [ { icon: 'clear', color: 'white' } ]
        },
        animations: 'all'
    },
    components: {
        QBar,
        QLayout,
        QHeader,
        QDrawer,
        QPageContainer,
        QPage,
        QToolbar,
        QToolbarTitle,
        QBtn,
        QCheckbox,
        QIcon,
        QList,
        QLinearProgress,
        QItem,
        QItemSection,
        QItemLabel,
        QDialog,
        QAvatar,
        QSeparator,
        QCard,
        QCardSection,
        QCardActions,
        QInput,
        QExpansionItem,
        QStepper,
        QStep,
        QStepperNavigation,
        QSplitter,
        QSelect,
        QSpinner,
        QSpinnerTail,
        QTable,
        QTd,
        QTr,
        QTh,
        QBadge,
        QPopupEdit,
        QSpace,
        QTooltip,
        QTree,
        QScrollArea,
        QMenu,
        QChip,
        QPageSticky,
        QRadio,
        QBreadcrumbs,
        QBreadcrumbsEl,
        QTabs,
        QTab,
        QRouteTab,
        QTabPanels,
        QTabPanel,
        QToggle,
        QField,
        QPagination
    },
    directives: {
        ClosePopup
    },
    plugins: {
        Dialog,
        LoadingBar,
        Loading,
        Notify,
        AppFullscreen
    }
});
