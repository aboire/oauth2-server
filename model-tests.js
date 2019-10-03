import { Random } from 'meteor/random'
import { assert } from 'meteor/practicalmeteor:chai'
import { Model, DefaultModelConfig } from './model'


describe('model', function () {

  describe('constructor', function () {

    const assertCollection = name => {
      const collection = Mongo.Collection.get(name)
      assert.isDefined(collection)
      assert.equal(collection.constructor.name, 'Collection')
    }

    it ('can be created with defaults', function () {
      assert.isDefined(new Model())
      assertCollection(DefaultModelConfig.accessTokensCollectionName)
      assertCollection(DefaultModelConfig.refreshTokensCollectionName)
      assertCollection(DefaultModelConfig.authCodesCollectionName)
      assertCollection(DefaultModelConfig.clientsCollectionName)
    })

    it ('can be created with custom collection names', function () {
      const randomAccessTokenName = Random.id()
      const randomRefreshTokenName = Random.id()
      const randomAuthCodeName = Random.id()
      const randomClientsName = Random.id()
      assert.isDefined(new Model({
        accessTokensCollectionName: randomAccessTokenName,
        refreshTokensCollectionName: randomRefreshTokenName,
        authCodesCollectionName: randomAuthCodeName,
        clientsCollectionName: randomClientsName
      }))
      assertCollection(randomAccessTokenName)
      assertCollection(randomRefreshTokenName)
      assertCollection(randomAuthCodeName)
      assertCollection(randomClientsName)
    })

    it ('can be created with custom collections passed', function () {
      const randomAccessTokenName = Random.id()
      const randomRefreshTokenName = Random.id()
      const randomAuthCodeName = Random.id()
      const randomClientsName = Random.id()
      const AccessTokens = new Mongo.Collection(randomAccessTokenName)
      const RefreshTokens = new Mongo.Collection(randomRefreshTokenName)
      const AuthCodes = new Mongo.Collection(randomAuthCodeName)
      const Clients = new Mongo.Collection(randomClientsName)
      assert.isDefined(new Model({
        accessTokensCollection: AccessTokens,
        refreshTokensCollection: RefreshTokens,
        authCodesCollection: AuthCodes,
        clientsCollection: Clients
      }))
      assertCollection(randomAccessTokenName)
      assertCollection(randomRefreshTokenName)
      assertCollection(randomAuthCodeName)
      assertCollection(randomClientsName)
    })
  })

  describe('createClient', function () {
    it ('is not yet implemented', function () {
      assert.fail()
    })
  })

  describe('getClient', function () {

    it ('returns a client by clientId', function () {
      assert.fail()
    })

    it ('returns a client by clientId and clientSecret', function () {
      assert.fail()
    })
  })

  describe('saveToken', function () {

    it ('saves an access token', function () {
      assert.fail()
    })

    it ('optionally saves a refresh token', function () {
      assert.fail()
    })

    it ('optionally allows to assign extended values', function () {
      assert.fail()
    })

  })

  describe('getAccessToken', function () {

    it ('returns a saved token', function () {
      assert.fail()
    })
  })

  describe('saveAuthorizationCode', function () {
    it ('is not yet implemented', function () {
      assert.fail()
    })
  })


  describe('getAuthorizationCode', function () {
    it ('returns a saved authorization code', function () {
      assert.fail()
    })
  })


  describe('revokeAuthorizationCode', function () {
    it ('is not yet implemented', function () {
      assert.fail()
    })
  })

  describe('saveRefreshToken', function () {
    it ('is not yet implemented', function () {
      assert.fail()
    })
  })

  describe('getRefreshToken', function () {
    it ('is not yet implemented', function () {
      assert.fail()
    })
  })

  describe('grantTypeAllowed', function () {
    it ('is not yet implemented', function () {
      assert.fail()
    })
  })

  /* optional:
  generateAccessToken
  generateAuthorizationCode
  generateRefreshToken
  getUser
  getUserFromClient
  grantTypeAllowed
  revokeToken
  validateScope
  */

})