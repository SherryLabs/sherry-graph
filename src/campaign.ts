import {
  CampaignCreated as CampaignCreatedEvent,
  CampaignUpdated as CampaignUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/Campaign/Campaign"
import {
  CampaignCreated,
  CampaignUpdated,
  OwnershipTransferred,
} from "../generated/schema"

export function handleCampaignCreated(event: CampaignCreatedEvent): void {
  let entity = new CampaignCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.idCampaign = event.params.idCampaign
  entity.idBrand = event.params.idBrand
  entity.name = event.params.name
  entity.amount = event.params.amount
  entity.startDate = event.params.startDate
  entity.endDate = event.params.endDate
  entity.uri = event.params.uri

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCampaignUpdated(event: CampaignUpdatedEvent): void {
  let entity = new CampaignUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.idCampaign = event.params.idCampaign
  entity.name = event.params.name
  entity.amount = event.params.amount

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
