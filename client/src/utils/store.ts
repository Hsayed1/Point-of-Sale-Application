import { configureStore, createSlice } from '@reduxjs/toolkit';

/**
 * Create a redux store that has an initial state injected into it containing the access
 * token with a default value of empty string, and a `login` action creator, and a `logout`,
 * and a `getAccessToken` selector, and a `useAccessToken` hook. Inject into the initial state
 * the access token from localStorage if it exists there. This way the access token can be
 * refreshed and the state will persist.
 */


type Modifier = {
    type: "MODIFIER";
    id: string;
    updated_at: string;
    created_at: string;
    is_deleted: boolean;
    modifier_data: {
        name: string;
        price_money: {
            amount: number;
            currency: string;
        };
        ordinal: number;
    };
};

type ModifierListData = {
    name: string;
    ordinal: number;
    selection_type: "SINGLE" | "MULTIPLE";
    modifiers: Modifier[];
};

type ItemVariationData = {
    type: "ITEM_VARIATION";
    id: string;
    updated_at: string;
    created_at: string;
    is_deleted: boolean;
    item_variation_data: {
        item_id: string;
        name: string;
        ordinal: number;
        pricing_type: "FIXED_PRICING" | "VARIABLE_PRICING";
        price_money: {
            amount: number;
            currency: string;
        };
        track_inventory: boolean;
        sellable: boolean;
        stockable: boolean;
    }
};

type ItemData = {
    name: string;
    description: string;
    is_taxable: boolean;
    visibility: "PUBLIC" | "PRIVATE";
    category_id: string;
    modifier_list_info: {
        modifier_list_id: string;
        min_selected_modifiers: number;
        max_selected_modifiers: number;
        enabled: boolean;
    }[];
    variations: ItemVariationData[];
    product_type: "REGULAR" | "GIFT_CARD";
    skip_modifier_screen: boolean;
    ecom_visibility: "PUBLIC" | "PRIVATE" | "UNINDEXED";
    description_html: string;
    description_plaintext: string;
};

type ModifierList = {
    type: "MODIFIER_LIST";
    id: string;
    updated_at: string;
    created_at: string;
    is_deleted: boolean;
    present_at_all_locations: boolean;
    modifier_list_data: ModifierListData;
};

type Item = {
    type: "ITEM";
    id: string;
    updated_at: string;
    created_at: string;
    is_deleted: boolean;
    item_data: ItemData;
}

type MenuItem = ModifierList | Item;

type Menu = MenuItem[];

type CartItem = {
    item_id: string;
    quantity: number;
};



export interface AppState {
    accessToken: string;
    cart: CartItem[];
    orders: any[];
    menu: Menu;
};

const initialState: AppState = {
    accessToken: '',
    cart: [],
    orders: [],
    menu: [],
};

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.accessToken = action.payload;
        },
        logout: (state) => {
            state.accessToken = '';
        }
    }
});

export const { login, logout } = slice.actions;

export const getAccessToken = (state: any) => state.auth.accessToken || '';


export const store = configureStore({
    reducer: slice.reducer
});

export type { Menu, MenuItem, ModifierList, Item, ItemVariationData, ModifierListData, Modifier, CartItem };