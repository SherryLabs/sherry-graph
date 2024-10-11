import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  BrandCreated,
  BrandUpdated,
  OwnershipTransferred
} from "../generated/Brand/Brand"

export function createBrandCreatedEvent(
  idBrand: BigInt,
  brandOwner: Address,
  name: string
): BrandCreated {
  let brandCreatedEvent = changetype<BrandCreated>(newMockEvent())

  brandCreatedEvent.parameters = new Array()

  brandCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "idBrand",
      ethereum.Value.fromUnsignedBigInt(idBrand)
    )
  )
  brandCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "brandOwner",
      ethereum.Value.fromAddress(brandOwner)
    )
  )
  brandCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return brandCreatedEvent
}

export function createBrandUpdatedEvent(
  idBrand: BigInt,
  brandOwner: Address,
  name: string
): BrandUpdated {
  let brandUpdatedEvent = changetype<BrandUpdated>(newMockEvent())

  brandUpdatedEvent.parameters = new Array()

  brandUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "idBrand",
      ethereum.Value.fromUnsignedBigInt(idBrand)
    )
  )
  brandUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "brandOwner",
      ethereum.Value.fromAddress(brandOwner)
    )
  )
  brandUpdatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return brandUpdatedEvent
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
