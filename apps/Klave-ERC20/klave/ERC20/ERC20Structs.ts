import {JSON} from "@klave/sdk"


@serializable
export class Allowance {
    spender: string;
    value: u64;

    constructor(spender: string, value: u64) {
        this.spender = spender;
        this.value = value;
    }
}

@serializable
export class Account {
    owner: string;
    balance: u64;
    allowance: Array<Allowance>;

    constructor(owner: string, balance: u64) {
        this.owner = owner;
        this.balance = balance;
        this.allowance = new Array<Allowance>();
    }

    findAllowance(spender: string): i32 {
        for (let i = 0; i < this.allowance.length; i++) {
            if (this.allowance[i].spender == spender) {
                return i;
            }
        }
        return -1;
    }

    addToAllowance(spender: string, value: u64): void {
        let index = this.findAllowance(spender);
        if (index != -1) {
            this.allowance[index].value += value;
        } else {
            this.allowance.push(new Allowance(spender, value));
        }
    }

    subtractFromAllowance(spender: string, value: u64): void {
        let index = this.findAllowance(spender);
        if (index != -1) {
            this.allowance[index].value -= value;
        } else {
            this.allowance.push(new Allowance(spender, 0));
        }
    }

    getAllowance(spender: string): u64 {
        let index = this.findAllowance(spender);
        if (index != -1) {
            return this.allowance[index].value;
        }
        return 0;
    }
}

