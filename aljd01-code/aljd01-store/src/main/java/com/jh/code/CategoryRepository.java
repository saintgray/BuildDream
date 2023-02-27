package com.jh.code;

import com.jh.code.jpo.CategoryJpo;
import com.jh.code.jpo.key.CategoryJpoKey;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigDecimal;
import java.util.List;

public interface CategoryRepository extends JpaRepository<CategoryJpo, CategoryJpoKey> {

    List<CategoryJpo> findByParentIdxInAndCatDeldateIsNull(List<BigDecimal> categoryIdxList);
}
