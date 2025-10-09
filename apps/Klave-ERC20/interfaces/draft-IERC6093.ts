// SPDX-License-Identifier: MIT
// Inspired from OpenZeppelin Contracts (last updated v5.0.0) (interfaces/draft-IERC6093.sol)

/**
 * @dev Standard ERC20 Errors
 * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC20 tokens.
 */
@serializable
export class IERC20Errors {
    /**
     * @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.
     * @param sender Address whose tokens are being transferred.
     * @param balance Current balance for the interacting account.
     * @param needed Minimum amount required to perform a transfer.
     */
    ERC20InsufficientBalance(sender: string, balance: u64, needed: u64): string {
        let message = `Insufficient Balance (${balance} < ${needed})`;
        if (sender.length != 0) {
            message += ` for ${sender}`;
        }
        return message;
    }

    /**
     * @dev Indicates a failure with the token `sender`. Used in transfers.
     * @param sender Address whose tokens are being transferred.
     */
    ERC20InvalidSender(sender: string) : string {
        let message = `Invalid Sender`;
        if (sender.length != 0) {
            message += ` from ${sender}`;
        }
        return message;
    }

    /**
     * @dev Indicates a failure with the token `receiver`. Used in transfers.
     * @param receiver Address to which tokens are being transferred.
     */
    ERC20InvalidReceiver(receiver: string) : string {
        let message = `Invalid Receiver`;
        if (receiver.length != 0) {
            message += ` from ${receiver}`;
        }
        return message;
    }

    /**
     * @dev Indicates a failure with the `spender`’s `allowance`. Used in transfers.
     * @param spender Address that may be allowed to operate on tokens without being their owner.
     * @param allowance Amount of tokens a `spender` is allowed to operate with.
     * @param needed Minimum amount required to perform a transfer.
     */
    ERC20InsufficientAllowance(spender: string, allowance: u64, needed: u64) : string {
        let message = `Insufficient Allowance (${allowance} < ${needed})`;
        if (spender.length != 0) {
            message += ` for ${spender}`;
        }
        return message;
    }

    /**
     * @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.
     * @param approver Address initiating an approval operation.
     */
    ERC20InvalidApprover(approver: string) : string {
        return "";
    }

    /**
     * @dev Indicates a failure with the `spender` to be approved. Used in approvals.
     * @param spender Address that may be allowed to operate on tokens without being their owner.
     */
    ERC20InvalidSpender(spender: string) : string {
        return "";
    }
}

/**
 * @dev Standard ERC721 Errors
 * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC721 tokens.
 */
interface IERC721Errors {
    /**
     * @dev Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in EIP-20.
     * Used in balance queries.
     * @param owner Address of the current owner of a token.
     */
    ERC721InvalidOwner(owner: string) : string;

    /**
     * @dev Indicates a `tokenId` whose `owner` is the zero address.
     * @param tokenId Identifier number of a token.
     */
    ERC721NonexistentToken(tokenId: u64) : string;

    /**
     * @dev Indicates an error related to the ownership over a particular token. Used in transfers.
     * @param sender Address whose tokens are being transferred.
     * @param tokenId Identifier number of a token.
     * @param owner Address of the current owner of a token.
     */
    ERC721IncorrectOwner(sender: string, tokenId: u64, owner: string) : string;

    /**
     * @dev Indicates a failure with the token `sender`. Used in transfers.
     * @param sender Address whose tokens are being transferred.
     */
    ERC721InvalidSender(sender: string) : string;

    /**
     * @dev Indicates a failure with the token `receiver`. Used in transfers.
     * @param receiver Address to which tokens are being transferred.
     */
    ERC721InvalidReceiver(receiver: string) : string;

    /**
     * @dev Indicates a failure with the `operator`’s approval. Used in transfers.
     * @param operator Address that may be allowed to operate on tokens without being their owner.
     * @param tokenId Identifier number of a token.
     */
    ERC721InsufficientApproval(operator: string, tokenId: u64) : string;

    /**
     * @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.
     * @param approver Address initiating an approval operation.
     */
    ERC721InvalidApprover(approver: string) : string;

    /**
     * @dev Indicates a failure with the `operator` to be approved. Used in approvals.
     * @param operator Address that may be allowed to operate on tokens without being their owner.
     */
    ERC721InvalidOperator(operator: string) : string;
}

/**
 * @dev Standard ERC1155 Errors
 * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC1155 tokens.
 */
interface IERC1155Errors {
    /**
     * @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.
     * @param sender Address whose tokens are being transferred.
     * @param balance Current balance for the interacting account.
     * @param needed Minimum amount required to perform a transfer.
     * @param tokenId Identifier number of a token.
     */
    ERC1155InsufficientBalance(sender: string, balance: u64, needed: u64, tokenId: u64) : string;

    /**
     * @dev Indicates a failure with the token `sender`. Used in transfers.
     * @param sender Address whose tokens are being transferred.
     */
    ERC1155InvalidSender(sender: string) : string;

    /**
     * @dev Indicates a failure with the token `receiver`. Used in transfers.
     * @param receiver Address to which tokens are being transferred.
     */
    ERC1155InvalidReceiver(receiver: string) : string;

    /**
     * @dev Indicates a failure with the `operator`’s approval. Used in transfers.
     * @param operator Address that may be allowed to operate on tokens without being their owner.
     * @param owner Address of the current owner of a token.
     */
    ERC1155MissingApprovalForAll(operator: string, owner: string) : string;

    /**
     * @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.
     * @param approver Address initiating an approval operation.
     */
    ERC1155InvalidApprover(approver: string) : string;

    /**
     * @dev Indicates a failure with the `operator` to be approved. Used in approvals.
     * @param operator Address that may be allowed to operate on tokens without being their owner.
     */
    ERC1155InvalidOperator(operator: string) : string;

    /**
     * @dev Indicates an array length mismatch between ids and values in a safeBatchTransferFrom operation.
     * Used in batch transfers.
     * @param idsLength Length of the array of token identifiers
     * @param valuesLength Length of the array of token amounts
     */
    ERC1155InvalidArrayLength(idsLength: u64, valuesLength: u64) : string;
}
