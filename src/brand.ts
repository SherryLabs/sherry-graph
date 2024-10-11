import {
  BrandCreated as BrandCreatedEvent,
  BrandUpdated as BrandUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Brand/Brand"
import {
  BrandCreated,
  BrandUpdated,
  OwnershipTransferred
} from "../generated/schema"

export function handleBrandCreated(event: BrandCreatedEvent): void {
  let entity = new BrandCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.idBrand = event.params.idBrand
  entity.brandOwner = event.params.brandOwner
  entity.name = event.params.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBrandUpdated(event: BrandUpdatedEvent): void {
  let entity = new BrandUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.idBrand = event.params.idBrand
  entity.brandOwner = event.params.brandOwner
  entity.name = event.params.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
