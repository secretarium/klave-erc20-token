import { JSON, Ledger, Context } from "@klave/sdk"
import { ERC20 } from "./token/ERC20/ERC20"
import { emit } from "./klave/types"
import { CreateInput, TransferInput, ApproveInput, TransferFromInput, AllowanceInput, IncreaseAllowanceInput, DecreaseAllowanceInput, MintInput, BurnInput } from "./klave/ERC20/ERC20RouteArgs";

const ERC20Table = "ERC20Table";

const _loadERC20 = function(): ERC20 {
    let erc20_table = Ledger.getTable(ERC20Table).get("ALL");
    if (erc20_table.length == 0) {
        emit("Coin does not exists. Create it first");
        return new ERC20("", "", 0, 0);
    }
    return JSON.parse<ERC20>(erc20_table);
}

const _saveERC20 = function(erc20 : ERC20): void {
    Ledger.getTable(ERC20Table).set("ALL", JSON.stringify<ERC20>(erc20));
}

/**
 * @transaction
 * @param {CreateInput}
 **/
export function createToken(input: CreateInput): void {    
    let erc20_table = Ledger.getTable(ERC20Table).get("ALL");
    if (erc20_table.length != 0) {
        emit("Token already exists");
        return;
    }
    let erc20 = new ERC20(input.name, input.symbol, input.decimals, input.totalSupply);
    Ledger.getTable(ERC20Table).set("ALL", JSON.stringify<ERC20>(erc20));
    emit("Token created successfully");
}

/** 
 * @query
 **/
export function name(): void {
    let erc20 = _loadERC20();
    if (erc20.name().length == 0) {
        return;
    }
    emit(`Name is ${erc20.name()}`);
}

/** 
 * @query
 *  */
export function symbol(): void {
    let erc20 = _loadERC20();
    if (erc20.name().length == 0) {
        return;
    }
    emit(`Symbol is ${erc20.symbol()}`);
}

/** 
 * @query
 *  */
export function decimals(): void {
    let erc20 = _loadERC20();
    if (erc20.name().length == 0) {
        return;
    }
    emit(`Symbol is ${erc20.decimals()}`);
}

/** 
 * @query
 *  */
export function totalSupply(): void {
    let erc20 = _loadERC20();
    if (erc20.name().length == 0) {
        return;
    }
    emit(`Total Supply is ${erc20.totalSupply()}`);
}

/** 
 * @query
 * @param {string}
 *  */
export function balanceOf(owner: string): void {
    let erc20 = _loadERC20();
    if (erc20.name().length == 0) {
        return;
    }
    if (owner.length == 0) {
        owner = Context.get('sender');
    }
    if (!erc20.accountHolder(owner)) {
        return;
    }
    emit(`Balance for ${owner} is ${erc20.balanceOf(owner)}`);
}

/** 
 * @transaction 
 * @param {TransferInput}
 *  */
export function transfer(input: TransferInput): void {
    let erc20 = _loadERC20();
    if (erc20.name().length == 0) {
        return;
    }
    if (!erc20.accountHolder(Context.get('sender')) || !erc20.accountHolder(input.to)) {
        return;
    }
    erc20.transfer(input.to, input.value);
    _saveERC20(erc20);
}

/** 
 * @transaction
 * @param {ApproveInput}
 *  */
export function approve(input: ApproveInput): void {
    let erc20 = _loadERC20();
    if (erc20.name().length == 0) {
        return;
    }
    if (!erc20.accountHolder(Context.get('sender')) || !erc20.accountHolder(input.spender)) {
        return;
    }
    erc20.approve(input.spender, input.value);
    _saveERC20(erc20);
}

/** 
 * @transaction
 * @param {TransferFromInput}
 *  */
export function transferFrom(input: TransferFromInput): void {
    let erc20 = _loadERC20();
    if (erc20.name().length == 0) {
        return;
    }
    if (input.from.length == 0) {
        input.from = Context.get('sender');
    }
    if (!erc20.accountHolder(input.from) || !erc20.accountHolder(input.to)) {
        return;
    }
    erc20.transferFrom(input.from, input.to, input.value);
    _saveERC20(erc20);
}

/** 
 * @query 
 * @param {AllowanceInput}
 **/
export function allowance(input: AllowanceInput): void {
    let erc20 = _loadERC20();
    if (erc20.name().length == 0) {
        return;
    }
    if (input.owner.length == 0) {
        input.owner = Context.get('sender');
    }
    if (!erc20.accountHolder(input.owner) || !erc20.accountHolder(input.spender)) {
        return;
    }
    emit(`Allowance for ${input.spender} on ${input.owner} account is ${erc20.allowance(input.owner, input.spender)}`);    
}

/**
 * @transaction
 * @param {IncreaseAllowanceInput}
 */
export function increaseAllowance(input: IncreaseAllowanceInput): void {
    let erc20 = _loadERC20();
    if (erc20.name().length == 0) {
        return;
    }
    if (!erc20.accountHolder(Context.get('sender')) || !erc20.accountHolder(input.spender)) {
        return;
    }
    erc20.increaseAllowance(input.spender, input.addedValue);
    _saveERC20(erc20);
}

/**
 * @transaction
 * @param {DecreaseAllowanceInput}
 */
export function decreaseAllowance(input: DecreaseAllowanceInput): void {
    let erc20 = _loadERC20();
    if (erc20.name().length == 0) {
        return;
    }
    if (!erc20.accountHolder(Context.get('sender')) || !erc20.accountHolder(input.spender)) {
        return;
    }
    erc20.decreaseAllowance(input.spender, input.subtractedValue);
    _saveERC20(erc20);
}

/**
 * @transaction
 * @param {MintInput}
 */
export function mint(input: MintInput): void {
    let erc20 = _loadERC20();
    if (erc20.name().length == 0) {
        return;
    }
    if (input.to.length == 0) {
        input.to = Context.get('sender');
    }
    if (!erc20.accountHolder(input.to)) {
        erc20.createAccount(input.to);
    }        
    erc20.mint(input.to, input.value);
    _saveERC20(erc20);
}

/**
 * @transaction
 * @param {BurnInput}
 */
export function burn(input: BurnInput): void {
    let erc20 = _loadERC20();
    if (erc20.name().length == 0) {
        return;
    }
    if (input.from.length == 0) {
        input.from = Context.get('sender');
    }
    if (!erc20.accountHolder(input.from)) {
        erc20.createAccount(input.from);
    }
    erc20.burn(input.from, input.value);
    _saveERC20(erc20);
}
