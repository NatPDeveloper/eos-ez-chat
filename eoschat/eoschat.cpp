#include <eosiolib/eosio.hpp>
#include <string>

using namespace eosio;

class eoschat : public contract {
  public:
      using contract::contract;

      [[eosio::action]]
      void sendmsg( name user, std::string msg_id, std::string msg ) {
         require_auth(user);
      }
};

EOSIO_DISPATCH( eoschat, (sendmsg))