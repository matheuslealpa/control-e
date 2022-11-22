package com.control.e.core.security;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

/**
 * Classe base para as configurações de segurança do recurso.
 */
public interface ResourceSecurityConfig {
  /**
   * @param http
   */
  void configure(HttpSecurity http);

}
