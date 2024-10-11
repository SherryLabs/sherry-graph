import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  PostCreated,
  Voted
} from "../generated/Sherry/Sherry"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPostCreatedEvent(
  idPost: BigInt,
  kol: Address,
  idCampaign: BigInt,
  url: string
): PostCreated {
  let postCreatedEvent = changetype<PostCreated>(newMockEvent())

  postCreatedEvent.parameters = new Array()

  postCreatedEvent.parameters.push(
    new ethereum.EventParam("idPost", ethereum.Value.fromUnsignedBigInt(idPost))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("kol", ethereum.Value.fromAddress(kol))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "idCampaign",
      ethereum.Value.fromUnsignedBigInt(idCampaign)
    )
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("url", ethereum.Value.fromString(url))
  )

  return postCreatedEvent
}

export function createVotedEvent(idPost: BigInt, voter: Address): Voted {
  let votedEvent = changetype<Voted>(newMockEvent())

  votedEvent.parameters = new Array()

  votedEvent.parameters.push(
    new ethereum.EventParam("idPost", ethereum.Value.fromUnsignedBigInt(idPost))
  )
  votedEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )

  return votedEvent
}
