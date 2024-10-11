import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CampaignCreated,
  CampaignUpdated,
  OwnershipTransferred
} from "../generated/Campaign/Campaign"

export function createCampaignCreatedEvent(
  idCampaign: BigInt,
  idBrand: BigInt,
  name: string,
  amount: BigInt,
  startDate: BigInt,
  endDate: BigInt,
  uri: string
): CampaignCreated {
  let campaignCreatedEvent = changetype<CampaignCreated>(newMockEvent())

  campaignCreatedEvent.parameters = new Array()

  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "idCampaign",
      ethereum.Value.fromUnsignedBigInt(idCampaign)
    )
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "idBrand",
      ethereum.Value.fromUnsignedBigInt(idBrand)
    )
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "startDate",
      ethereum.Value.fromUnsignedBigInt(startDate)
    )
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "endDate",
      ethereum.Value.fromUnsignedBigInt(endDate)
    )
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam("uri", ethereum.Value.fromString(uri))
  )

  return campaignCreatedEvent
}

export function createCampaignUpdatedEvent(
  idCampaign: BigInt,
  name: string,
  amount: BigInt
): CampaignUpdated {
  let campaignUpdatedEvent = changetype<CampaignUpdated>(newMockEvent())

  campaignUpdatedEvent.parameters = new Array()

  campaignUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "idCampaign",
      ethereum.Value.fromUnsignedBigInt(idCampaign)
    )
  )
  campaignUpdatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  campaignUpdatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return campaignUpdatedEvent
}

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
