import {
  CampaignContractUpdated as CampaignContractUpdatedEvent,
  KolCampaignAdded as KolCampaignAddedEvent,
  KolJoined as KolJoinedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/KOL/KOL"
import {
  CampaignContractUpdated,
  KolCampaignAdded,
  KolJoined,
  OwnershipTransferred,
} from "../generated/schema"

export function handleCampaignContractUpdated(
  event: CampaignContractUpdatedEvent,
): void {
  let entity = new CampaignContractUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.campaignContract = event.params.campaignContract

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleKolCampaignAdded(event: KolCampaignAddedEvent): void {
  let entity = new KolCampaignAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.idKolCampaign = event.params.idKolCampaign
  entity.kol = event.params.kol
  entity.idCampaign = event.params.idCampaign

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleKolJoined(event: KolJoinedEvent): void {
  let entity = new KolJoined(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.kol = event.params.kol

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
