import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { BrandCreated } from "../generated/schema"
import { BrandCreated as BrandCreatedEvent } from "../generated/Brand/Brand"
import { handleBrandCreated } from "../src/brand"
import { createBrandCreatedEvent } from "./brand-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let idBrand = BigInt.fromI32(234)
    let brandOwner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let name = "Example string value"
    let newBrandCreatedEvent = createBrandCreatedEvent(
      idBrand,
      brandOwner,
      name
    )
    handleBrandCreated(newBrandCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BrandCreated created and stored", () => {
    assert.entityCount("BrandCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BrandCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "idBrand",
      "234"
    )
    assert.fieldEquals(
      "BrandCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "brandOwner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BrandCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
