import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  CampaignContractUpdated,
  KolCampaignAdded,
  KolJoined,
  OwnershipTransferred
} from "../generated/KOL/KOL"

export function createCampaignContractUpdatedEvent(
  campaignContract: Address
): CampaignContractUpdated {
  let campaignContractUpdatedEvent = changetype<CampaignContractUpdated>(
    newMockEvent()
  )

  campaignContractUpdatedEvent.parameters = new Array()

  campaignContractUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "campaignContract",
      ethereum.Value.fromAddress(campaignContract)
    )
  )

  return campaignContractUpdatedEvent
}

export function createKolCampaignAddedEvent(
  idKolCampaign: BigInt,
  kol: Address,
  idCampaign: BigInt
): KolCampaignAdded {
  let kolCampaignAddedEvent = changetype<KolCampaignAdded>(newMockEvent())

  kolCampaignAddedEvent.parameters = new Array()

  kolCampaignAddedEvent.parameters.push(
    new ethereum.EventParam(
      "idKolCampaign",
      ethereum.Value.fromUnsignedBigInt(idKolCampaign)
    )
  )
  kolCampaignAddedEvent.parameters.push(
    new ethereum.EventParam("kol", ethereum.Value.fromAddress(kol))
  )
  kolCampaignAddedEvent.parameters.push(
    new ethereum.EventParam(
      "idCampaign",
      ethereum.Value.fromUnsignedBigInt(idCampaign)
    )
  )

  return kolCampaignAddedEvent
}

export function createKolJoinedEvent(kol: Address): KolJoined {
  let kolJoinedEvent = changetype<KolJoined>(newMockEvent())

  kolJoinedEvent.parameters = new Array()

  kolJoinedEvent.parameters.push(
    new ethereum.EventParam("kol", ethereum.Value.fromAddress(kol))
  )

  return kolJoinedEvent
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
