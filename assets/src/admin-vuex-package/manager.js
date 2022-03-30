import './event-bus';
import PaymentsPage from './components/PaymentsPage';
import EntriesTable from './components/EntriesTable';
import DetailsTableWithStore from './components/DetailsTableWithStore';
import TablePagination from './components/TablePagination';
import ChooseAction from './components/ChooseAction';
import Constants from './constants';
import ClearFiltersButton from './components/ClearFiltersButton';
import FilterMixin from './mixins/FilterMixin';
import GetColumnComponent from './mixins/GetColumnComponent';
import BaseStore from './store/base-store';
import TableSeedPlugin from './store/plugins/table-seed';
import TableModulePlugin from './store/plugins/table-module';
import SingleMetaBoxesPlugin from './store/plugins/single-meta-boxes';
import NoticesPlugin from './store/plugins/NoticesPlugin';
import PostBoxSkeleton from './components/PostBoxSkeleton';
import PostBoxGrid from './components/PostBoxGrid';
import PostBoxContainer from './components/PostBoxContainer';
import PostBoxSimple from './components/PostBoxSimple';
import EntriesList from './components/EntriesList';
import * as ChooseColumn from './components/TableColumns/choose';
import * as LinkTypeColumn from './components/TableColumns/link-type';
import * as ActionsColumn from './components/TableColumns/actions';
import * as PayerColumn from './components/TableColumns/payer';
import ScopeStoreMixin from './mixins/ScopeStoreMixin';
import EditTableSwitcher from './components/BoxActions/EditTableSwitcher';
import AlertsList from './components/Alerts/AlertsList';
import DashboardPanel from './components/VuiBoxes/DashboardPanel';
import SideBarBoxes from './components/SideBarBoxes';

Vue.use( Vuex );

window.JetFBComponents = {
	...window.JetFBComponents,
	EntriesTable,
	PaymentsPage,
	DetailsTableWithStore,
	TablePagination,
	ChooseAction,
	ClearFiltersButton,
	PostBoxSkeleton,
	PostBoxGrid,
	PostBoxContainer,
	PostBoxSimple,
	EntriesList,
	ChooseColumn,
	ActionsColumn,
	PayerColumn,
	LinkTypeColumn,
	EditTableSwitcher,
	AlertsList,
	DashboardPanel,
	SideBarBoxes,
};


window.JetFBMixins = {
	...window.JetFBMixins,
	FilterMixin,
	GetColumnComponent,
	ScopeStoreMixin,
};


window.JetFBStore = {
	BaseStore,
	TableSeedPlugin,
	TableModulePlugin,
	SingleMetaBoxesPlugin,
	NoticesPlugin,
};

window.JetFBConst = Constants;