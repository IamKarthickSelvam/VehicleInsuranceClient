export interface Vehicle {
    regNo: string,
    type?: string;
    img?: string;
    model?: string;
    regYear?: number;
    year?: Date;
    status?: string;
    age?: number;
    value?: number;
    cprem1Year?: number;
    cprem2Year?: number;
    cprem3Year?: number;
    tprem1Year?: number;
    tprem2Year?: number;
    tprem3Year?: number;
    finalPremium?: number;
    accCover?: boolean;
    selectedPlan?: string;
    fullName?: string;
    email?: string;
    mobNo?: number;
    pincode?: number;
}