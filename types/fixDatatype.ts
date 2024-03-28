import { SvgIconComponent } from "@mui/icons-material";


export type TranslationsType = {
    kor: string;
    jpn: string;
    eng: string;
};

export type CategoryType = {
    id: string;
    tenantId: string;
    name: string;
    color: string;
    Icon: SvgIconComponent;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    translations: TranslationsType;
};

export type SpaceType = {
    id: string;
    parent_id: string | null;
    name: string;
    identifier: string | null;
    type: {
        value: string;
        label: string;
    };
    qr_codes: string[] | null;
    created_at: string;
    updated_at: string;
    children: SpaceType[] | null;
};

export type GroupType = {
    id: string;
    name: string;
    created_at: string;
    updated_at: string | null;
    children: GroupType[] | null;
    parent_group: string | null;
    documents: string[] | null;
}

export type AssetType = {
    id: string;
    name: string;
    space: SpaceType;
    identifier: string;
    created_at: string;
    updated_at: string | null;
    qr_codes: string[] | null;
    documents: string[] | null;
    group: GroupType;
    brand: string;
    supplier: string;
    serial_number: string;
    purchased_at: string;
    comment: string | null;
}